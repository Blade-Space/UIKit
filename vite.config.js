import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import dts from "vite-plugin-dts";
// import vitePluginCssModules from "vite-plugin-css-modules";

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/lib/index.tsx'),
            name: 'UIKit',
            fileName: (format) => `uikit.${format}.js`
        },
        rollupOptions: {
            external: ['react', 'reactDom'],
            output: {
                globals: {react: 'React'}
            }
        }
    },
    plugins: [react(), viteTsconfigPaths(), svgrPlugin(), dts({insertTypesEntry: true})]
})