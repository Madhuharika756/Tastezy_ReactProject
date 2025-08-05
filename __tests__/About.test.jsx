import { render,screen } from "@testing-library/react"
import About from "../src/components/About"
import { expect } from "vitest";

test("About Component should be rendered ",async()=>{
   render(<About/>);
   const heading = await screen.findByRole("heading",{
      name:/about tastezy/i,
   });
   expect(heading).toBeInTheDocument();
})