import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";
import Header from "../src/components/Header";
import FooterSecundario from "./components/FooterSecundario"
import Footer from "./components/Footer"
import Cadastrar from "./pages/Cadastrar";
import CadastroProduto from "./pages/CadastroProduto";
import CadastroServico from "./pages/CadastroServico";
import CatalogoProdutos from "./pages/CatalogoProdutos";
import Solicitacoes from "./pages/Solicitacoes";
import Agendados from "./pages/Agendados";
import Login from "./pages/Login";
import ConfColaborador from "./pages/ConfirmacaoColaborador";
import CadastroColaborador from "./pages/CadastroColaborador";
import EscolhaSegmento from "./pages/EscolhaSegmentos";
import Home from "./pages/Home";




// function PrivateRoute({ role, children, ...rest }) {

//     if (!isSignedIn()) {
//         return <Redirect to="/" />
//     }
//     else{
//         return <Route {...rest}>{children} </Route>;
//     }
// }


function Router() {

    return (
        <>
        <BrowserRouter>
            <Switch>

                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/Login">
                    <Login/>
                </Route>
                <Route exact path="/catalogos/produtos" component={CatalogoProdutos}/>     
                          
                <Route path="/cadastro_produto">
                    <CadastroProduto />
                </Route>

                <Route path="/cadastre-se">
                    <Cadastrar />
                </Route>
                
                <Route path="/cadastro_servico">
                    <CadastroServico />
                </Route>

                <Route path="/solicitacoes">
                    <Solicitacoes />
                </Route>
                
                <Route path="/agendados">
                    <Agendados />
                </Route>
                
                <Route path="/confColaborador">
                    <ConfColaborador />
                </Route>
                
                <Route path="/cadastro_colaborador">
                    <CadastroColaborador />
                </Route>

                <Route path="/escolhaSegmento">
                    <EscolhaSegmento />
                </Route>

            </Switch>
        </BrowserRouter>

        </>
    );
}

export default Router;