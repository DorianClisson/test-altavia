import type {Config} from "jest";


const config: Config =
    {
        preset: "ts-jest",
        testEnvironment: "node",
        modulePathIgnorePatterns: ["<rootDir>/pack.ts", "<rootDir>/users.json"]
    };

export default config;
