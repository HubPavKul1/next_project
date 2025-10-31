import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    // console.log("hello")
    // здесь можно писать какую-нибудь логику для обработки запроса например
    // const token = request.cookies.get("token")?.value
    // if (!token && request.nextUrl.pathname.startsWith("/profile_fake")) {
    //     return NextResponse.redirect(new URL("/", request.url))
    // }
    return NextResponse.next()
}

export const config = {
    matcher: ["/profile_fake/:path*"]
}