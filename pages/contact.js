import { formium } from '../lib/formium';
import { FormiumForm } from "@formium/react";

export async function getStaticProps(context) {
    const form = await formium.getFormBySlug('contact-us');
    return { props: { form } };
}

function Contact({ form }) {
    console.log(form);
    return <div>
        <FormiumForm data={form}  onSubmit={async (values) => {
            await formium.submitForm('contact-us', values);
            alert('Thank you!');
            
        }} />
    </div>
}

export default Contact;