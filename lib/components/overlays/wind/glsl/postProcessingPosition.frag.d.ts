declare const text = "\nuniform sampler2D nextParticlesPosition;\nuniform sampler2D particlesSpeed; // (u, v, w, norm)\n\n// range (min, max)\nuniform vec2 lonRange;\nuniform vec2 latRange;\n\nuniform float randomCoefficient; // use to improve the pseudo-random generator\nuniform float dropRate; // drop rate is a chance a particle will restart at random position to avoid degeneration\nuniform float dropRateBump;\n\nvarying vec2 v_textureCoordinates;\n\n// pseudo-random generator\nconst vec3 randomConstants = vec3(12.9898, 78.233, 4375.85453);\nconst vec2 normalRange = vec2(0.0, 1.0);\nfloat rand(vec2 seed, vec2 range) {\n  vec2 randomSeed = randomCoefficient * seed;\n  float temp = dot(randomConstants.xy, randomSeed);\n  temp = fract(sin(temp) * (randomConstants.z + temp));\n  return temp * (range.y - range.x) + range.x;\n}\n\nvec3 generateRandomParticle(vec2 seed, float lev) {\n  // ensure the longitude is in [0, 360]\n  float randomLon = mod(rand(seed, lonRange), 360.0);\n  float randomLat = rand(-seed, latRange);\n\n  return vec3(randomLon, randomLat, lev);\n}\n\nbool particleOutbound(vec3 particle) {\n  return particle.y < -90.0 || particle.y > 90.0;\n}\n\nvoid main() {\n  vec3 nextParticle = texture2D(nextParticlesPosition, v_textureCoordinates).rgb;\n  vec4 nextSpeed = texture2D(particlesSpeed, v_textureCoordinates);\n  float speedNorm = nextSpeed.a;\n  float particleDropRate = dropRate + dropRateBump * speedNorm;\n\n  vec2 seed1 = nextParticle.xy + v_textureCoordinates;\n  vec2 seed2 = nextSpeed.xy + v_textureCoordinates;\n  vec3 randomParticle = generateRandomParticle(seed1, nextParticle.z);\n  float randomNumber = rand(seed2, normalRange);\n\n  if (randomNumber < particleDropRate || particleOutbound(nextParticle)) {\n    gl_FragColor = vec4(randomParticle, 1.0); // 1.0 means this is a random particle\n  } else {\n    gl_FragColor = vec4(nextParticle, 0.0);\n  }\n}\n";
export default text;