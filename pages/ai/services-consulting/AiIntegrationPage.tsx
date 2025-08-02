import React from 'react';

export default function AiIntegrationPage() {
  return (
    <main className="px-6 lg:px-20 py-16 bg-white text-gray-800 space-y-24">

      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto space-y-4">
        <h1 className="text-4xl font-bold">AI Integration Services</h1>
        <p className="text-lg text-gray-600">
          Connect intelligence across your stack. NexusByte helps you embed AI into your apps, platforms, data flows, and business tools—securely, scalably, and swiftly.
        </p>
        <p className="text-sm text-blue-600">From Slack to SAP. From Teams to ticketing. From no-code to full API orchestrations.</p>
      </section>

      {/* Supported Integration Stack */}
      <section>
        <h2 className="text-2xl font-bold mb-6">🔗 Integration Touchpoints</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Microsoft 365 & Teams",
            "Salesforce, Zoho, HubSpot",
            "Slack, WhatsApp, Telegram",
            "Jira, Notion, Trello",
            "SharePoint & OneDrive",
            "PostgreSQL, MySQL, MSSQL",
            "Azure OpenAI, OpenAI API, Google Vertex",
            "Custom CRM/ERP connectors",
          ].map((tool, i) => (
            <div key={i} className="bg-gray-50 rounded-lg shadow p-4 text-sm font-medium text-gray-700">
              {tool}
            </div>
          ))}
        </div>
      </section>

      {/* How We Integrate AI */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">🛠️ Our Integration Playbook</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li><strong>Discovery & Mapping:</strong> We identify your key systems, workflows, and pain points for automation or intelligence infusion.</li>
          <li><strong>Secure Access Setup:</strong> OAuth, SSO, role-based controls, and scoped tokens to ensure access integrity.</li>
          <li><strong>Connector Development:</strong> We build serverless APIs or middleware bridges to ingest and return AI-enhanced outputs.</li>
          <li><strong>Prompt + Agent Engineering:</strong> Custom prompts or agents process business context and generate accurate outcomes.</li>
          <li><strong>Deployment & Monitoring:</strong> We roll out in staging or production, then monitor for uptime, hallucination rates, and feedback loops.</li>
        </ol>
      </section>

      {/* Real Examples */}
      <section className="bg-blue-50 p-8 rounded-lg space-y-6">
        <h2 className="text-2xl font-bold">🚀 Real-World Use Cases</h2>
        <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
          <div>
            <strong>Legal Ops:</strong> AI scans SharePoint folders, extracts contract clauses, and updates Notion tasks via API
          </div>
          <div>
            <strong>Customer Service:</strong> Nova integrated into Zendesk + WhatsApp, enabling 24/7 multilingual ticket resolution
          </div>
          <div>
            <strong>HR Automation:</strong> AI agent connected to Microsoft Forms for CV scoring, notifying hiring managers via Teams
          </div>
          <div>
            <strong>Retail Chatbot:</strong> Integrated GPT assistant on WooCommerce site + WhatsApp that handles returns, promotions, and inventory queries
          </div>
        </div>
      </section>

      {/* Compliance + Observability */}
      <section className="mt-16 space-y-4">
        <h2 className="text-2xl font-bold">🔐 Secure, Observable, Compliant</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>POPIA, GDPR, PAIA aware access management</li>
          <li>All data pipelines logged & encrypted (AES-256, TLS 1.3)</li>
          <li>Usage analytics: token counts, agent logs, uptime</li>
          <li>Option to route via on-prem or South African cloud</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center mt-24 space-y-4">
        <h3 className="text-2xl font-bold">Integrate AI Into Your Stack</h3>
        <p className="text-gray-600">
          Request a scoped quote or demo integration tailored to your systems and workflows.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Request Integration Demo
        </button>
      </section>

    </main>
  );
}
