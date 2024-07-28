import FormComponents from "./FormComponents";
import FormProvider from "./FormContext";

function Form() {  
    return ( 
        <FormProvider>
            <FormComponents />
        </FormProvider>
    );
}

export default Form;