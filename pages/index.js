import React from "react";
import Head from "next/head";
import Image from "next/image";
import Main from "../components/main";

export default function Home() {
    return (
        <div>
            <Head>
                <title>rtemsoft</title>
                <meta
                    name="description"
                    content="Created by Aayush Bajaj and Austin Page"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Main />
            </main>

            <footer></footer>
        </div>
    );
}
