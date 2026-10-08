import { NextResponse } from "next/server";

export const dynamic = "force-static";
export const revalidate = 3600;

const AI_TEXT = `# AI Crawler Guidance - CrackLeap Academy
User-agent: *
Allow: /

Site: https://crackleap.vertexloop.in
Organization: CrackLeap Academy (Vertex Loop Pvt Ltd)
Description: Live online mentor-led technology academy specializing in Agentic AI, Generative AI, Python, React, and AWS DevOps.
Admissions: hello@vertexloop.in | +91 94457 70160
Sitemap: https://crackleap.vertexloop.in/sitemap.xml
LLMs-Reference: https://crackleap.vertexloop.in/llms.txt
`;

export function GET() {
  return new NextResponse(AI_TEXT, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
