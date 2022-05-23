'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const Status = {
  NONE: 0,
  STORING: 1,
  STORED: 2,
  FAILED: 3
};
class IndexedDBScheduler {
  constructor(options) {
    if (!Cesium.defined(options.name)) {
      throw new Cesium.DeveloperError("options.name is required.");
    }
    const dbRequest = window.indexedDB.open(this.dbname);
    this.layer = options.layer || null;
    this.storageType = options.storageType || "arrayBuffer";
    this.creatingTable = false;
    this.cachestatus = {};
    this.dbname = options.name;
    const that = this;
    return new Promise((resolve, reject) => {
      dbRequest.onsuccess = (event) => {
        that.db = event.target.result;
        that.version = that.db.version;
        that.cachestatus = that.cachestatus || {};
        resolve(that);
      };
      dbRequest.onupgradeneeded = (event) => {
        that.db = event.target.result;
        that.version = that.db.version;
        resolve(that);
      };
      dbRequest.onerror = (event) => {
        that.db = null;
        reject("create database fail, error code : " + event.target.errorcode);
      };
    });
  }
  checkObjectStoreExist(storeName) {
    return Cesium.defined(this.db) ? this.db.objectStoreNames.contains(storeName) : false;
  }
  createObjectStore(storeName) {
    return new Promise((resolve, reject) => {
      if (this.creatingTable) {
        reject(false);
      } else {
        if (this.db.objectStoreNames.contains(storeName)) {
          reject(false);
          return;
        }
        this.creatingTable = true;
        const version = parseInt(this.db.version);
        this.db.close();
        const that = this;
        const dbRequest = window.indexedDB.open(this.dbname, version + 1);
        dbRequest.onupgradeneeded = (event) => {
          const db = event.target.result;
          that.db = db;
          const objectStore = db.createObjectStore(storeName, {
            keyPath: "id"
          });
          if (Cesium.defined(objectStore)) {
            objectStore.createIndex("value", "value", {
              unique: false
            });
            that.creatingTable = false;
            that.cachestatus = that.cachestatus || {};
            that.cachestatus[storeName] = {};
            that.db.close();
            const dbRequest2 = window.indexedDB.open(that.dbname);
            dbRequest2.onsuccess = (event2) => {
              that.db = event2.target.result;
              resolve(true);
            };
          } else {
            that.creatingTable = false;
            resolve(false);
          }
        };
        dbRequest.onsuccess = (event) => {
          ;
          event.target.result.close();
          resolve(true);
        };
        dbRequest.onerror = (event) => {
          that.creatingTable = false;
          reject(false);
        };
      }
    });
  }
  putElementInDB(storeName, id, value) {
    return new Promise((resolve, reject) => {
      if (!Cesium.defined(this.db)) {
        reject(false);
        return;
      }
      const { cachestatus, db } = this;
      if (Cesium.defined(cachestatus[storeName]) && Cesium.defined(cachestatus[storeName][id] && (cachestatus[storeName][id] === Status.STORING || cachestatus[storeName][id] === Status.STORED))) {
        resolve(false);
        return;
      }
      if (db.objectStoreNames.contains(storeName)) {
        cachestatus[storeName] = cachestatus[storeName] || {};
        try {
          const request = db.transaction([storeName], "readwrite").objectStore(storeName).add({
            id,
            value
          });
          cachestatus[storeName][id] = Status.STORING;
          request.onsuccess = (event) => {
            cachestatus[storeName][id] = Status.STORED;
            resolve(true);
          };
          request.onerror = (event) => {
            cachestatus[storeName][id] = Status.FAILED;
            resolve(false);
          };
        } catch (error) {
          reject(null);
          return;
        }
      } else {
        this.createObjectStore(storeName).then(() => {
          const request = db.transaction([storeName], "readwrite").objectStore(storeName).add({
            id,
            value
          });
          request.onsuccess = function(e) {
            resolve(true);
          };
          request.onerror = function(e) {
            reject(false);
          };
        }, () => {
          reject(false);
        });
      }
    });
  }
  getElementFromDB(storeName, id) {
    return new Promise((resolve, reject) => {
      const { db } = this;
      if (!Cesium.defined(db)) {
        return null;
      }
      if (!db.objectStoreNames.contains(storeName)) {
        return null;
      }
      try {
        const transaction = db.transaction([storeName]);
        const objectStore = transaction.objectStore(storeName);
        const request = objectStore.get(id);
        request.onsuccess = (e) => {
          return Cesium.defined(e.target.result) ? resolve(e.target.result.value) : reject(null);
        };
        request.onerror = (e) => {
          reject(null);
        };
      } catch (error) {
        reject(null);
      }
    });
  }
  updateElementInDB(storeName, id, value) {
    return new Promise((resolve, reject) => {
      const { db } = this;
      if (!Cesium.defined(db)) {
        resolve(false);
        return;
      }
      if (!db.objectStoreNames.contains(storeName)) {
        resolve(false);
        return;
      }
      try {
        const request = db.transaction([storeName], "readwrite").objectStore(storeName).put({ id, value });
        request.onsuccess = () => {
          resolve(true);
        };
        request.onerror = () => {
          resolve(false);
        };
      } catch (e) {
        resolve(false);
      }
    });
  }
  removeElementFromDB(storeName, id) {
    return new Promise((resolve, reject) => {
      const { db } = this;
      if (!Cesium.defined(db)) {
        resolve(false);
        return;
      }
      if (!db.objectStoreNames.contains(storeName)) {
        resolve(false);
        return;
      }
      try {
        const request = db.transaction([storeName], "readwrite").objectStore(storeName).delete(id);
        request.onsuccess = () => {
          resolve(true);
        };
        request.onerror = () => {
          resolve(false);
        };
      } catch (e) {
        resolve(false);
      }
    });
  }
  clear(storeName) {
    return new Promise((resolve, reject) => {
      const { db } = this;
      if (!Cesium.defined(db)) {
        resolve(false);
        return;
      }
      if (!db.objectStoreNames.contains(storeName)) {
        resolve(false);
        return;
      }
      try {
        const request = db.transaction([storeName], "readwrite").objectStore(storeName).clear();
        request.onsuccess = () => {
          resolve(true);
        };
        request.onerror = () => {
          resolve(false);
        };
      } catch (e) {
        resolve(false);
      }
    });
  }
}

exports["default"] = IndexedDBScheduler;
//# sourceMappingURL=IndexedDBScheduler.js.map
