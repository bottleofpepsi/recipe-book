import "webpack-dev-server";

import CopyWebpackPlugin from "copy-webpack-plugin";
import Dotenv from "dotenv-webpack";
import path from "path";
import { Configuration } from "webpack";

const config: Configuration = {
    entry: "./src/main.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                type: "asset/resource",
            },
        ],
    },
    mode:
        (process.env.NODE_ENV as "production" | "development" | undefined) ??
        "development",
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{ from: "public" }],
        }),
        new Dotenv({
            systemvars: true,
        }),
    ],
};

export default config;
