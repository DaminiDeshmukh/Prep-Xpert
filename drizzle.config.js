/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://AI-INTERVIEW-MOCKER_owner:no46RSyhbHIP@ep-withered-wave-a15krjr9.ap-southeast-1.aws.neon.tech/AI-INTERVIEW-MOCKER?sslmode=require',
    }
  };