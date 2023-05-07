import "@style/globals.css";

export const metadata = {
  title: "PromptFinder",
  description: "Find AI Prompts",
};

const RootLayout = () => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
