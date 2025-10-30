"use server"

export async function postTweet(formdata: FormData) {
    const content = formdata.get("content")
    console.log("content: ", content)
}