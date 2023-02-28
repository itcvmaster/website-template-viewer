import { useRoutes } from "react-router-dom";
import routes from "routes";
function App() {
    const content = useRoutes(routes);

    return (
        <div id="app" className="Content">
            {content}
        </div>
    );
}

export default App;
