export const apps = [
  {
    name: 'CardDraw',
    port: '9092',
    exec_mode: 'cluster',
    instances: 'max',
    script: './.output/server/index.mjs',
  },
];
