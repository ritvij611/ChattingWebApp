import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
	  port: 3000,
	  proxy: {
		"/api": {
		  target: "http://localhost:3002",
		  changeOrigin: true, // Makes sure the request appears as though it came from 3002
		  secure: false, // Disable SSL verification if using HTTP
		},
	  },
	},
  });
  
