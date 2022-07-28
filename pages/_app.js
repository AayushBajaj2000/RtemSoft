import "../styles/globals.css";
import React from "react";
import Layout from "../components/Layout";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps, router }) {
    return (
        <QueryClientProvider client={queryClient}>
            <Layout>
                <motion.div
                    key={router.route}
                    initial="pageInitial"
                    animate="pageAnimate"
                    variants={{
                        pageInitial: {
                            opacity: 0,
                        },
                        pageAnimate: {
                            opacity: 1,
                        },
                    }}
                    transition={{ delay: 0.2, type: "tween" }}
                >
                    <Component {...pageProps} />
                </motion.div>
            </Layout>
        </QueryClientProvider>
    );
}

export default MyApp;
