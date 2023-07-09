import MyApp from "./myApp";

export default function App() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>My app</title>
            </head>
            <body>
                Hello World
                <MyApp />
                <script>{`let exports = {};`}</script>
            </body>
        </html>
    );
}