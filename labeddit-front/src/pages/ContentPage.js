import Header from "../components/Headers/header";
import useProtectedPage from "../hooks/useProtectedPage";

export default function ContentPage(){

    useProtectedPage()
return (
    <>
     <Header/>
     

    </>
    )
}