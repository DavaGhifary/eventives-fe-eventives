// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {

    const isLogin = true;  // Simulate login check

    if (isLogin) {
        return NextResponse.next();
    } else {
        return NextResponse.redirect(new URL("/auth-event/login", req.url));
    }
}

export const config = {
    matcher: ["/event-management/events", "/user-management/users"],
};
