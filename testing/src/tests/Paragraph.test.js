import {render,screen} from "@testing-library/react"
import Paragraph from "../components/Paragraph"

test("Testing the para component", ()=>{
    render(<Paragraph/>);
    const element = screen.getByText("Paragraph");
    except(element).toBeInTheDocument
});