module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'prepord-strapi-server.postgres.database.azure.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'postgres'),
      user: env('DATABASE_USERNAME', 'strapiadmin'),
      password: env('DATABASE_PASSWORD', 'Kavi@123'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
