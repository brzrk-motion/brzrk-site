struct Params {
  time: f32,
  texel: vec2f,
}

@group(0) @binding(0) var<uniform> params: Params;

fn hash(p: vec2f) -> f32 {
  return fract(sin(dot(p, vec2f(127.1, 311.7))) * 43758.5453);
}

fn hash3(p: vec3f) -> f32 {
  return fract(sin(dot(p, vec3f(127.1, 311.7, 74.7))) * 43758.5453);
}

fn noise(p: vec2f) -> f32 {
  let i = floor(p);
  let f = fract(p);
  let u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2f(1.0, 0.0)), u.x),
    mix(hash(i + vec2f(0.0, 1.0)), hash(i + vec2f(1.0, 1.0)), u.x),
    u.y
  );
}

fn fbm(p: vec2f) -> f32 {
  var v = 0.0;
  var a = 0.5;
  var pos = p;
  for (var i = 0; i < 5; i++) {
    v += a * noise(pos);
    pos *= 2.0;
    a *= 0.5;
  }
  return v;
}

fn ribbon_field(uv: vec2f, t: f32) -> f32 {
  let p = uv * vec2f(2.8, 1.6);
  let warp = vec2f(
    fbm(p + t * 0.07),
    fbm(p + vec2f(5.2, 1.3) - t * 0.05)
  );
  let q = p + warp * 1.4;
  return fbm(q + vec2f(t * 0.1, 0.0));
}

fn orange_volume(uv: vec2f, t: f32) -> vec3f {
  let c1 = vec2f(0.78 + sin(t * 0.13) * 0.04, 0.32 + cos(t * 0.11) * 0.03);
  let c2 = vec2f(0.32 + cos(t * 0.17) * 0.03, 0.62 + sin(t * 0.15) * 0.025);
  let d1 = distance(uv, c1);
  let d2 = distance(uv, c2);
  let g1 = exp(-d1 * d1 / 0.14) * 0.28;
  let g2 = exp(-d2 * d2 / 0.09) * 0.14;
  return vec3f(0.94, 0.40, 0.10) * (g1 + g2);
}

@fragment
fn fs_main(@location(0) uv: vec2f) -> @location(0) vec4f {
  let t = params.time;

  var col = vec3f(0.018, 0.018, 0.022);

  let field = ribbon_field(uv, t);
  let field2 = ribbon_field(uv + vec2f(1.9, 0.7), t * 0.9);

  let grey = vec3f(0.38, 0.39, 0.42) * smoothstep(0.32, 0.72, field) * 0.11;
  let grey2 = vec3f(0.30, 0.31, 0.34) * smoothstep(0.38, 0.78, field2) * 0.07;
  col += grey + grey2;

  let ridge = smoothstep(0.50, 0.57, field) * smoothstep(0.66, 0.57, field);
  col += vec3f(0.90, 0.36, 0.06) * ridge * 0.22;

  col += orange_volume(uv, t);

  let grain = (hash3(vec3f(uv * 900.0, t * 0.4)) - 0.5) * 0.022;
  col += grain;

  let vig = smoothstep(1.15, 0.28, distance(uv, vec2f(0.52, 0.46)));
  col *= mix(0.35, 1.0, vig);

  let copy_mask = smoothstep(0.0, 0.62, uv.x);
  col = mix(col * 0.22, col, copy_mask);

  col *= mix(0.65, 1.0, smoothstep(0.0, 0.1, uv.y));

  return vec4f(col, 1.0);
}
