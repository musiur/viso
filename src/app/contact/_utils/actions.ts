"use server";

export async function sendEmail(formData: any) {
    try {
        formData.country = formData.country.label
        const response = await fetch(`${process.env.LOCAL_BASEURL}/api/contact`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        if (!response?.ok) {
            return { success: false, message: 'Failed to send email. Please try again later.' };
        }
        return { success: true, message: 'Email sent successfully!' };
    } catch (error) {
        console.error('Error:', error);
        return { success: false, message: 'Failed to send email. Please try again later.' };
    }
}