window.API_CATALOG = [
  {
    "name": "Groq",
    "category": "AI / LLM",
    "description": "Fast inference API for open and hosted language models.",
    "signup_url": "https://console.groq.com/keys",
    "pricing_url": "https://groq.com/pricing",
    "documentation_url": "https://groq.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "rate-limited-free",
      "details": "Free API access with model- and usage-specific rate limits; verify current limits on the linked pricing page.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the free GroqCloud developer tier; a payment method is used for paid usage.",
    "authentication": "API keys sent as Bearer tokens in the Authorization header.",
    "protocols": [
      "HTTPS REST API",
      "OpenAI-compatible API"
    ],
    "sdk_languages": [
      "Python",
      "JavaScript/TypeScript"
    ],
    "commercial_use": "Available subject to Groq's terms and applicable model/provider terms.",
    "self_hostable": "Unavailable for the GroqCloud service; Groq documents cloud API access rather than customer self-hosting.",
    "webhooks": "Unavailable in the published GroqCloud API documentation.",
    "rate_limit": "Published limits are organization-level and vary by model and plan, including requests-per-minute and tokens-per-minute/day limits.",
    "free_tier_reset": "Daily limits reset at 00:00 UTC; per-minute limits use rolling/minute windows.",
    "uses": [
      "LLM inference",
      "text generation/chat",
      "structured outputs",
      "tool/function calling",
      "vision-capable model inference where offered",
      "open-model serving"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://groq.com/",
      "source_1": "https://console.groq.com/docs/overview",
      "source_2": "https://console.groq.com/docs/quickstart",
      "source_3": "https://console.groq.com/docs/openai"
    }
  },
  {
    "name": "Mistral AI",
    "category": "AI / LLM",
    "description": "Mistral Studio API for language, document, audio and agent workloads.",
    "signup_url": "https://console.mistral.ai/api-keys",
    "pricing_url": "https://mistral.ai/technology/#pricing",
    "documentation_url": "https://mistral.ai/",
    "free_tier": {
      "has_free_tier": true,
      "type": "rate-limited-free",
      "details": "Mistral Studio Free mode provides API access with limited usage and rate limits; official quickstart says no credit card is required.",
      "amount": "$10/month API credits on the Free plan; verify current applicability",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the free Experiment plan; paid Scale usage requires billing setup.",
    "authentication": "API keys sent in the Authorization: Bearer header.",
    "protocols": [
      "HTTPS REST API"
    ],
    "sdk_languages": [
      "Python",
      "TypeScript/JavaScript"
    ],
    "commercial_use": "Commercial use is permitted under Mistral's applicable API terms, subject to the terms and model-specific licenses.",
    "self_hostable": "Yes for models that Mistral publishes under licenses permitting deployment; Mistral also provides self-deployment documentation.",
    "webhooks": "Unavailable in the published Mistral API reference.",
    "rate_limit": "The Experiment plan has published request/token limits; Scale limits depend on the purchased plan and account.",
    "free_tier_reset": "Experiment-plan quotas are rate limits (minute-based), not a published monthly credit reset.",
    "uses": [
      "LLM inference",
      "text generation/chat",
      "embeddings",
      "document/OCR processing",
      "moderation",
      "agents/tool calling",
      "speech/audio models where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://mistral.ai/",
      "source_1": "https://docs.mistral.ai/getting-started/plans/",
      "source_2": "https://docs.mistral.ai/getting-started/quickstart/",
      "source_3": "https://docs.mistral.ai/api/"
    }
  },
  {
    "name": "Google Gemini API",
    "category": "AI / LLM",
    "description": "Gemini API through Google AI Studio.",
    "signup_url": "https://aistudio.google.com/app/apikey",
    "pricing_url": "https://ai.google.dev/gemini-api/pricing",
    "documentation_url": "https://ai.google.dev/gemini-api",
    "free_tier": {
      "has_free_tier": true,
      "type": "rate-limited-free",
      "details": "New accounts begin on the Free Tier with model-specific free-tier rate limits.",
      "amount": "Model-specific; see official billing page",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the Gemini API free tier; billing is required to use the paid tier.",
    "authentication": "An API key is passed with the x-goog-api-key header (or the SDK's API-key configuration).",
    "protocols": [
      "HTTPS REST API",
      "Server-sent events (streaming)"
    ],
    "sdk_languages": [
      "Python",
      "JavaScript/TypeScript",
      "Go",
      "Java",
      "C#"
    ],
    "commercial_use": "Commercial use is available on the paid tier, subject to Google's Gemini API additional terms and applicable model terms.",
    "self_hostable": "No; the Gemini API is a hosted Google service.",
    "webhooks": "Unavailable in the published Gemini API documentation.",
    "rate_limit": "Limits are measured by requests per minute, tokens per minute, and requests per day, and vary by model and usage tier.",
    "free_tier_reset": "Requests-per-day quotas reset at midnight Pacific time; per-minute quotas use minute windows.",
    "uses": [
      "multimodal generation",
      "text generation/chat",
      "image/audio/video understanding",
      "structured output",
      "function calling",
      "embeddings",
      "long-context applications"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://ai.google.dev/gemini-api",
      "source_1": "https://ai.google.dev/gemini-api/docs/billing",
      "source_2": "https://ai.google.dev/gemini-api/docs/quickstart",
      "source_3": "https://ai.google.dev/gemini-api/docs/text-generation"
    }
  },
  {
    "name": "OpenRouter",
    "category": "AI / LLM",
    "description": "Unified API gateway for many model providers, including a free plan and free models.",
    "signup_url": "https://openrouter.ai/settings/keys",
    "pricing_url": "https://openrouter.ai/pricing",
    "documentation_url": "https://openrouter.ai/",
    "free_tier": {
      "has_free_tier": true,
      "type": "free-models",
      "details": "Free plan includes API access to free models.",
      "amount": "25+ free models; 50 requests/day on the Free plan",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No to use the free models/free plan; payment is required to purchase credits for paid usage.",
    "authentication": "An OpenRouter API key is sent as a Bearer token in the Authorization header.",
    "protocols": [
      "HTTPS REST API",
      "OpenAI-compatible API"
    ],
    "sdk_languages": [
      "Python",
      "JavaScript/TypeScript"
    ],
    "commercial_use": "Commercial use is governed by OpenRouter's terms and by the terms/licenses of the selected model and upstream provider.",
    "self_hostable": "No for the OpenRouter routing service; it is a hosted gateway.",
    "webhooks": "Unavailable in the published OpenRouter API documentation.",
    "rate_limit": "Free users are limited to 200 requests per day; paid users' limits are based on credits and account/provider constraints.",
    "free_tier_reset": "The free-model request limit resets daily.",
    "uses": [
      "multi-provider LLM routing",
      "text generation/chat",
      "model selection/fallbacks",
      "streaming",
      "structured outputs",
      "tool calling",
      "access to free and paid models"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://openrouter.ai/",
      "source_1": "https://openrouter.ai/docs/faq",
      "source_2": "https://openrouter.ai/docs/quickstart",
      "source_3": "https://openrouter.ai/docs/api-reference/overview"
    }
  },
  {
    "name": "Hugging Face",
    "category": "AI / ML",
    "description": "Model hub and hosted inference with user access tokens.",
    "signup_url": "https://huggingface.co/settings/tokens",
    "pricing_url": "https://huggingface.co/pricing",
    "documentation_url": "https://huggingface.co/",
    "free_tier": {
      "has_free_tier": true,
      "type": "monthly-credit",
      "details": "Free users receive monthly credits for Inference Providers.",
      "amount": "$0.10/month for Free users, subject to change",
      "expiry": "Monthly credits; verify current terms"
    },
    "requires_credit_card": "No for the free Hub/Inference Providers allowance; payment is required for paid credits or upgraded plans.",
    "authentication": "A Hugging Face user access token is supplied as a Bearer token.",
    "protocols": [
      "HTTPS REST API"
    ],
    "sdk_languages": [
      "Python",
      "JavaScript/TypeScript"
    ],
    "commercial_use": "Depends on the license and terms of the particular model, dataset, Space, or provider; Hugging Face does not publish one provider-wide commercial-use permission.",
    "self_hostable": "Yes: Hugging Face publishes open models and documents downloading/running them locally; hosted Inference Providers are not self-hosted.",
    "webhooks": "Yes for documented Hub webhooks (repository events); this is distinct from an inference-result webhook.",
    "rate_limit": "Limits depend on the selected Inference Provider/model and the user's account/plan; no single provider-wide numeric limit is published.",
    "free_tier_reset": "Free monthly Inference Providers credits are replenished monthly; the published amount and eligibility depend on account status.",
    "uses": [
      "model inference",
      "text generation",
      "embeddings",
      "image/audio inference",
      "model/dataset access",
      "inference endpoints"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://huggingface.co/",
      "source_1": "https://huggingface.co/docs/inference-providers/pricing",
      "source_2": "https://huggingface.co/docs/huggingface_hub/security-tokens",
      "source_3": "https://huggingface.co/docs/api-inference/index"
    }
  },
  {
    "name": "Cohere",
    "category": "AI / LLM",
    "description": "Language and embedding APIs with trial API keys.",
    "signup_url": "https://dashboard.cohere.com/api-keys",
    "pricing_url": "https://cohere.com/pricing",
    "documentation_url": "https://cohere.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "rate-limited-free",
      "details": "Every registered user receives a free, rate-limited trial key.",
      "amount": "Trial keys are limited; official docs currently state 1,000 API calls/month for trial keys, with endpoint-specific rate limits",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key sent in the Authorization header (Bearer token).",
    "protocols": [
      "HTTPS REST API"
    ],
    "sdk_languages": [
      "Python",
      "TypeScript",
      "Java",
      "C#",
      "Go",
      "PHP",
      "Ruby",
      "CLI"
    ],
    "commercial_use": "Cohere's commercial terms provide for use of the services by business customers; use is subject to the Cohere Terms of Use and any applicable model-specific terms.",
    "self_hostable": "Cohere publishes model deployment options through North, including deployment in a customer's environment; availability depends on the applicable Cohere offering and license.",
    "webhooks": "Unavailable",
    "rate_limit": "Rate limits vary by endpoint and account/plan; Cohere documents them as requests per minute and tokens per minute in the rate-limit documentation.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "text generation",
      "embeddings",
      "reranking",
      "classification",
      "semantic search",
      "tool use"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://cohere.com/",
      "source_1": "https://cohere.com/pricing",
      "source_2": "https://docs.cohere.com/docs/authentication",
      "source_3": "https://docs.cohere.com/reference/about"
    }
  },
  {
    "name": "NVIDIA NIM APIs",
    "category": "AI / LLM",
    "description": "NVIDIA-hosted model APIs through the NVIDIA Developer Program.",
    "signup_url": "https://build.nvidia.com/settings/api-keys",
    "pricing_url": "https://build.nvidia.com/explore/discover",
    "documentation_url": "https://build.nvidia.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "rate-limited-free",
      "details": "Developer Program/API Catalog access can generate API keys; exact free allowances vary by model and account access.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "An NVIDIA API key is used for hosted build.nvidia.com API access and is supplied as a Bearer token in the Authorization header.",
    "protocols": [
      "HTTPS REST API",
      "OpenAI-compatible API"
    ],
    "sdk_languages": [],
    "commercial_use": "NVIDIA's hosted API terms govern use; the official hosted API documentation does not publish a blanket commercial-use permission independent of those terms.",
    "self_hostable": "NVIDIA NIM is available as deployable containers for self-hosted inference, subject to NVIDIA's software licensing and the applicable NIM product entitlement.",
    "webhooks": "Unavailable",
    "rate_limit": "NVIDIA documents hosted API limits/quotas by service and account; a single universal rate limit is not published.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "LLM inference",
      "vision/language models",
      "embeddings",
      "reranking",
      "GPU-accelerated inference"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://build.nvidia.com/",
      "source_1": "https://build.nvidia.com/explore/discover",
      "source_2": "https://docs.api.nvidia.com/nim/reference/authentication",
      "source_3": "https://docs.nvidia.com/nim/large-language-models/latest/getting-started.html"
    }
  },
  {
    "name": "Replicate",
    "category": "AI / Models",
    "description": "API for running open models and creating model predictions.",
    "signup_url": "https://replicate.com/account/api-tokens",
    "pricing_url": "https://replicate.com/pricing",
    "documentation_url": "https://replicate.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "API token creation is verified; current free allowance is not asserted here.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "A payment method is required to continue using Replicate after the introductory free credits are exhausted.",
    "authentication": "Use a Replicate API token in the Authorization header as a Bearer token.",
    "protocols": [
      "HTTPS REST API",
      "HTTP streaming"
    ],
    "sdk_languages": [
      "Python",
      "JavaScript/TypeScript",
      "Elixir",
      "Go",
      "Java",
      "Swift"
    ],
    "commercial_use": "Replicate's Terms of Service permit use of the service for commercial purposes, subject to the terms, acceptable-use rules, and model-specific licenses.",
    "self_hostable": "Replicate's hosted API is not self-hostable; Replicate separately documents Cog as an open-source tool for packaging and running models on your own infrastructure.",
    "webhooks": "Yes. Predictions can be configured with a webhook URL; Replicate sends lifecycle event HTTP POST requests.",
    "rate_limit": "Replicate documents a default limit of 600 API requests per minute for authenticated API requests.",
    "free_tier_reset": "Replicate provides introductory credits for new accounts; it does not document a recurring free-tier reset schedule.",
    "uses": [
      "data retrieval",
      "search/query operations",
      "resource management where supported",
      "application integrations",
      "automation workflows",
      "developer applications"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://replicate.com/",
      "source_1": "https://replicate.com/docs/billing",
      "source_2": "https://replicate.com/docs/reference/http#authentication",
      "source_3": "https://replicate.com/docs/reference/http"
    }
  },
  {
    "name": "DeepInfra",
    "category": "AI / LLM",
    "description": "Hosted open-source model inference API.",
    "signup_url": "https://deepinfra.com/dash/api_keys",
    "pricing_url": "https://deepinfra.com/pricing",
    "documentation_url": "https://deepinfra.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "API-key creation is documented; free allowance is not asserted without a current official quota source.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Use a DeepInfra API token as a Bearer token in the Authorization header.",
    "protocols": [
      "HTTPS REST API",
      "OpenAI-compatible API"
    ],
    "sdk_languages": [
      "Python",
      "JavaScript/TypeScript"
    ],
    "commercial_use": "DeepInfra's terms govern commercial use; the service documentation does not publish a separate blanket commercial-use license for every model.",
    "self_hostable": "No. DeepInfra documents a hosted inference API and does not publish a self-hosting option for the DeepInfra service.",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "DeepInfra documents a one-time free-credit allowance for new users, not a recurring reset schedule.",
    "uses": [
      "data retrieval",
      "search/query operations",
      "resource management where supported",
      "application integrations",
      "automation workflows",
      "developer applications"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://deepinfra.com/",
      "source_1": "https://deepinfra.com/pricing",
      "source_2": "https://deepinfra.com/docs/advanced/api",
      "source_3": "https://deepinfra.com/docs/advanced/api"
    }
  },
  {
    "name": "OpenAI API",
    "category": "AI / LLM",
    "description": "OpenAI developer API.",
    "signup_url": "https://platform.openai.com/api-keys",
    "pricing_url": "https://openai.com/api/pricing/",
    "documentation_url": "https://openai.com/api/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "API-key creation is verified; no free API quota is asserted here.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "A payment method is required to purchase API credits/use prepaid billing; ChatGPT login is separate from API authentication and billing.",
    "authentication": "Authenticate API requests with an API key in the Authorization header as a Bearer token.",
    "protocols": [
      "HTTPS REST API",
      "Server-sent events (streaming)",
      "WebSocket"
    ],
    "sdk_languages": [
      "Python",
      "JavaScript/TypeScript",
      ".NET",
      "Java",
      "Go",
      "Ruby",
      "PHP"
    ],
    "commercial_use": "OpenAI's business/API services terms grant customers rights to use input and output for business purposes, subject to the applicable terms and policies.",
    "self_hostable": "No. OpenAI API models are provided as hosted services; OpenAI does not publish weights or a self-hosting option for the API models.",
    "webhooks": "Yes. OpenAI documents webhooks for receiving events from API resources such as background responses and fine-tuning jobs.",
    "rate_limit": "Limits are organization/project-specific and measured in requests per minute and tokens per minute; the dashboard and response headers expose applicable limits.",
    "free_tier_reset": "OpenAI does not publish a recurring free API-tier reset schedule; API usage is billed according to the pricing and account billing documents.",
    "uses": [
      "text generation/chat",
      "vision and multimodal processing",
      "embeddings",
      "image generation",
      "speech-to-text/text-to-speech",
      "moderation",
      "tool/function calling"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://openai.com/api/",
      "source_1": "https://help.openai.com/en/articles/8264644-how-can-i-set-up-prepaid-billing",
      "source_2": "https://platform.openai.com/docs/api-reference/authentication",
      "source_3": "https://platform.openai.com/docs/api-reference/streaming"
    }
  },
  {
    "name": "xAI API",
    "category": "AI / LLM",
    "description": "Grok API through the xAI developer console.",
    "signup_url": "https://console.x.ai/team/default/api-keys",
    "pricing_url": "https://docs.x.ai/docs/models",
    "documentation_url": "https://docs.x.ai/docs/billing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "API-key creation is verified; current free allowance is not asserted here.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key supplied as a Bearer token in the Authorization header",
    "protocols": [
      "HTTPS REST API",
      "OpenAI-compatible API interface"
    ],
    "sdk_languages": [
      "OpenAI-compatible client libraries",
      "xAI documentation provides examples for Python and JavaScript/TypeScript (no separate xAI SDK language list published)"
    ],
    "commercial_use": "Subject to xAI Terms of Service; the terms grant a license to use the services and do not state a general non-commercial-only restriction.",
    "self_hostable": "No (the API is documented as an xAI-hosted service; no self-hosting option is published)",
    "webhooks": "Unavailable",
    "rate_limit": "Varies by model and team tier; xAI publishes rate limits in its rate-limit documentation.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "data retrieval",
      "search/query operations",
      "resource management where supported",
      "application integrations",
      "automation workflows",
      "developer applications"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://docs.x.ai/docs/billing",
      "source_1": "https://docs.x.ai/docs/quickstart",
      "source_2": "https://docs.x.ai/docs/quickstart",
      "source_3": "https://docs.x.ai/docs/quickstart"
    }
  },
  {
    "name": "Anthropic API",
    "category": "AI / LLM",
    "description": "Claude API through the Anthropic Console.",
    "signup_url": "https://console.anthropic.com/settings/keys",
    "pricing_url": "https://www.anthropic.com/pricing#api",
    "documentation_url": "https://docs.anthropic.com/en/api/getting-started",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "API Console/key creation is documented; no free API quota is asserted here.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key in the x-api-key header; requests also use the anthropic-version header",
    "protocols": [
      "HTTPS REST API",
      "Messages API",
      "official SDKs use the REST API"
    ],
    "sdk_languages": [
      "Python, TypeScript, Java, Go, Ruby, C#, and PHP"
    ],
    "commercial_use": "Commercial use is governed by Anthropic's Commercial Terms of Service; the terms apply to customers using the services for business purposes and do not impose a general non-commercial-only restriction.",
    "self_hostable": "No (Anthropic documents the API as Anthropic-hosted; no self-hosting right or deployment option is published for the API)",
    "webhooks": "Unavailable",
    "rate_limit": "Rate limits vary by organization usage tier; limits are expressed in requests per minute, tokens per minute, and tokens per day, with published tier limits.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "LLM text generation",
      "chat",
      "long-context reasoning",
      "vision",
      "tool use",
      "structured outputs"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://docs.anthropic.com/en/api/getting-started",
      "source_1": "https://docs.anthropic.com/en/api/getting-started",
      "source_2": "https://docs.anthropic.com/en/api/getting-started",
      "source_3": "https://docs.anthropic.com/en/api/client-sdks"
    }
  },
  {
    "name": "DeepSeek API",
    "category": "AI / LLM",
    "description": "DeepSeek API compatible with OpenAI and Anthropic SDK styles.",
    "signup_url": "https://platform.deepseek.com/api_keys",
    "pricing_url": "https://api-docs.deepseek.com/quick_start/pricing",
    "documentation_url": "https://api-docs.deepseek.com/quick_start/payment",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "API-key requirement is verified; current free API allowance is not asserted here.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key supplied as a Bearer token in the Authorization header",
    "protocols": [
      "HTTPS REST API",
      "OpenAI-compatible API format"
    ],
    "sdk_languages": [
      "OpenAI-compatible client libraries",
      "DeepSeek does not publish a separate official SDK language list"
    ],
    "commercial_use": "Governed by DeepSeek's Terms of Use; the terms do not state a general non-commercial-only restriction.",
    "self_hostable": "No for the DeepSeek API (the API documentation describes a hosted endpoint; no API self-hosting option is published)",
    "webhooks": "Unavailable",
    "rate_limit": "Varies by account and is published as an account/service limit; DeepSeek states that API rate limits may be adjusted based on service conditions.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "LLM text generation",
      "chat",
      "reasoning models",
      "code generation",
      "structured/tool workflows"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://api-docs.deepseek.com/quick_start/payment",
      "source_1": "https://api-docs.deepseek.com/",
      "source_2": "https://api-docs.deepseek.com/",
      "source_3": "https://api-docs.deepseek.com/"
    }
  },
  {
    "name": "Deepgram",
    "category": "Speech / Audio",
    "description": "Speech-to-text and audio intelligence APIs.",
    "signup_url": "https://console.deepgram.com/project/keys",
    "pricing_url": "https://deepgram.com/pricing",
    "documentation_url": "https://deepgram.com/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Key-management page verified; current free allowance is not asserted here.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": false,
    "authentication": "API key via Authorization header (Token <API_KEY>)",
    "protocols": [
      "REST/HTTP and WebSocket (streaming)"
    ],
    "sdk_languages": [
      "Python, JavaScript/TypeScript, Go, C#, Java, and Ruby"
    ],
    "commercial_use": "Permitted under the Deepgram Terms of Use, subject to the agreement's restrictions and applicable plan terms.",
    "self_hostable": "No",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable; Deepgram publishes plan/account-dependent limits and instructs users to consult the limits documentation/dashboard.",
    "free_tier_reset": "Monthly credits",
    "uses": [
      "speech-to-text",
      "text-to-speech",
      "real-time transcription",
      "speaker diarization",
      "audio intelligence"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://deepgram.com/pricing",
      "source_1": "https://developers.deepgram.com/docs/authenticating",
      "source_2": "https://developers.deepgram.com/docs/getting-started-with-the-api",
      "source_3": "https://developers.deepgram.com/docs/sdks"
    }
  },
  {
    "name": "ElevenLabs",
    "category": "Speech / Audio",
    "description": "Text-to-speech, speech-to-text and voice APIs.",
    "signup_url": "https://elevenlabs.io/app/developers/api-keys",
    "pricing_url": "https://elevenlabs.io/pricing",
    "documentation_url": "https://elevenlabs.io/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "API-key page verified; current free allowance is not asserted here.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": false,
    "authentication": "API key in the xi-api-key header (or authorization header where documented)",
    "protocols": [
      "REST/HTTP",
      "streaming responses over HTTP (and WebSocket for supported realtime APIs)"
    ],
    "sdk_languages": [
      "Python, JavaScript/TypeScript, and other official SDKs listed in the ElevenLabs documentation"
    ],
    "commercial_use": "Commercial use is available on paid plans; the free plan is not licensed for commercial use, according to the ElevenLabs Terms of Service/pricing plan terms.",
    "self_hostable": "No",
    "webhooks": "Yes",
    "rate_limit": "Varies by subscription plan and account; documented in the usage/rate-limits documentation.",
    "free_tier_reset": "Monthly characters/credits",
    "uses": [
      "text-to-speech",
      "voice cloning",
      "speech-to-speech",
      "voice design",
      "audio generation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://elevenlabs.io/pricing",
      "source_1": "https://elevenlabs.io/docs/api-reference/authentication",
      "source_2": "https://elevenlabs.io/docs/api-reference/text-to-speech",
      "source_3": "https://elevenlabs.io/docs/libraries"
    }
  },
  {
    "name": "fal.ai",
    "category": "AI / Image / Video",
    "description": "Hosted generative media models with API access.",
    "signup_url": "https://fal.ai/dashboard/keys",
    "pricing_url": "https://fal.ai/pricing",
    "documentation_url": "https://docs.fal.ai/model-apis/quickstart",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Key-management route verified; current free allowance is not asserted here.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "FAL_KEY API key, supplied as an environment variable or Authorization: Key header",
    "protocols": [
      "REST/HTTP",
      "asynchronous queue API and realtime WebSocket APIs"
    ],
    "sdk_languages": [
      "JavaScript/TypeScript and Python"
    ],
    "commercial_use": "Subject to fal.ai Terms of Service and the terms/licensing applicable to each model; no blanket commercial-use statement is published for all models.",
    "self_hostable": "Unavailable",
    "webhooks": "Yes",
    "rate_limit": "Varies by account/model and is governed by fal.ai usage limits; no single universal numeric limit is published.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "image generation",
      "video generation",
      "image editing",
      "audio/voice models",
      "model inference"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://docs.fal.ai/model-apis/quickstart",
      "source_1": "https://docs.fal.ai/model-apis/quickstart",
      "source_2": "https://docs.fal.ai/model-apis/queue",
      "source_3": "https://docs.fal.ai/model-apis/quickstart"
    }
  },
  {
    "name": "OpenWeather",
    "category": "Weather",
    "description": "Weather and forecast APIs.",
    "signup_url": "https://home.openweathermap.org/api_keys",
    "pricing_url": "https://openweathermap.org/price",
    "documentation_url": "https://openweathermap.org/price",
    "free_tier": {
      "has_free_tier": true,
      "type": "rate-limited-free",
      "details": "Free subscription is offered; current limits should be checked on the official pricing page.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": false,
    "authentication": "API key passed as the appid query parameter (or X-API-Key header where documented)",
    "protocols": [
      "HTTPS REST API returning JSON"
    ],
    "sdk_languages": [
      "Unavailable",
      "official documentation provides API endpoints and examples, but does not publish an official language SDK list"
    ],
    "commercial_use": "Commercial plans and terms are published; use is subject to OpenWeather's terms and the selected subscription/plan",
    "self_hostable": "No",
    "webhooks": "Unavailable; no webhook feature is documented in the official API documentation",
    "rate_limit": "Free access is limited to 60 calls per minute; other limits depend on the product/plan",
    "free_tier_reset": "daily",
    "uses": [
      "current weather",
      "forecasts",
      "historical weather",
      "air pollution",
      "geocoding",
      "weather maps"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://openweathermap.org/price",
      "source_1": "https://openweathermap.org/appid",
      "source_2": "https://openweathermap.org/current",
      "source_3": "https://openweathermap.org/api"
    }
  },
  {
    "name": "Mapbox",
    "category": "Maps / Geocoding",
    "description": "Maps, tiles, search and navigation APIs.",
    "signup_url": "https://account.mapbox.com/access-tokens/",
    "pricing_url": "https://www.mapbox.com/pricing/",
    "documentation_url": "https://www.mapbox.com/pricing/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Access-token page verified; current free allowance is not asserted here.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable; official documentation/pricing does not state that a card is required to create an account",
    "authentication": "Access tokens (public or secret), supplied as an access_token parameter or bearer token as supported by the API",
    "protocols": [
      "HTTPS REST APIs",
      "vector/raster tile and geospatial service endpoints"
    ],
    "sdk_languages": [
      "JavaScript, Android, iOS, and Flutter SDKs are officially documented"
    ],
    "commercial_use": "Commercial use is permitted subject to the Mapbox Terms of Service, applicable product terms, and plan/billing limits",
    "self_hostable": "No",
    "webhooks": "Unavailable; Mapbox API documentation does not document a general webhook facility",
    "rate_limit": "Varies by API/product and endpoint; Mapbox publishes endpoint-specific rate limits in the relevant API documentation",
    "free_tier_reset": "monthly",
    "uses": [
      "maps",
      "geocoding",
      "places",
      "directions/routing",
      "distance matrices",
      "navigation/location services"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.mapbox.com/pricing/",
      "source_1": "https://docs.mapbox.com/accounts/guides/tokens/",
      "source_2": "https://docs.mapbox.com/api/overview/",
      "source_3": "https://docs.mapbox.com/"
    }
  },
  {
    "name": "MapTiler",
    "category": "Maps / Geocoding",
    "description": "Cloud maps, geocoding and tile APIs.",
    "signup_url": "https://cloud.maptiler.com/account/keys/",
    "pricing_url": "https://www.maptiler.com/cloud/pricing/",
    "documentation_url": "https://www.maptiler.com/cloud/pricing/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Key-management page verified; current free allowance is not asserted here.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable; the official pricing page does not state that a credit card is required for the free plan",
    "authentication": "API key, supplied with requests as the key query parameter",
    "protocols": [
      "HTTPS REST/HTTP APIs for maps, tiles, geocoding, and related services"
    ],
    "sdk_languages": [
      "JavaScript, Android, iOS, and other officially documented SDK/integration options"
    ],
    "commercial_use": "Commercial use is available under paid plans and is governed by MapTiler's terms and plan restrictions",
    "self_hostable": "Yes; MapTiler documents MapTiler Server as an on-premises/self-hosted product",
    "webhooks": "Unavailable; no webhook capability is documented in the official Cloud API documentation",
    "rate_limit": "Varies by plan and service; limits/quotas are described by the official pricing and API documentation",
    "free_tier_reset": "monthly",
    "uses": [
      "maps/tiles",
      "geocoding",
      "routing",
      "static maps",
      "map styling",
      "geospatial data"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.maptiler.com/cloud/pricing/",
      "source_1": "https://docs.maptiler.com/cloud/api/authentication/",
      "source_2": "https://docs.maptiler.com/cloud/api/",
      "source_3": "https://docs.maptiler.com/"
    }
  },
  {
    "name": "LocationIQ",
    "category": "Maps / Geocoding",
    "description": "Geocoding, reverse geocoding, routing and map APIs.",
    "signup_url": "https://my.locationiq.com/dashboard",
    "pricing_url": "https://locationiq.com/pricing",
    "documentation_url": "https://locationiq.com/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Dashboard/key management route verified; current quota is not asserted here.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": false,
    "authentication": "API key (access token), supplied as the key/access_token request parameter",
    "protocols": [
      "HTTPS REST API with JSON responses"
    ],
    "sdk_languages": [
      "Unavailable (official documentation provides HTTP/API examples but does not publish an official SDK-language list)"
    ],
    "commercial_use": "Commercial use is available on LocationIQ's paid plans; the free plan is for non-commercial use",
    "self_hostable": "Unavailable (no self-hosting option stated in the official documentation or pricing page)",
    "webhooks": "Unavailable (no webhook feature stated in the official API documentation)",
    "rate_limit": "Free plan: 2 requests per second and 5,000 requests per day",
    "free_tier_reset": "daily (5,000 requests per day)",
    "uses": [
      "forward/reverse geocoding",
      "maps",
      "routing",
      "places/search",
      "location autocomplete"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://locationiq.com/pricing",
      "source_1": "https://locationiq.com/docs-html/index.html#access-tokens",
      "source_2": "https://locationiq.com/docs-html/index.html",
      "source_3": "https://locationiq.com/docs-html/index.html"
    }
  },
  {
    "name": "Resend",
    "category": "Email",
    "description": "Transactional email API.",
    "signup_url": "https://resend.com/api-keys",
    "pricing_url": "https://resend.com/pricing",
    "documentation_url": "https://resend.com/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "API-key page verified; current free allowance is not asserted here.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": false,
    "authentication": "Bearer API key in the Authorization HTTP header",
    "protocols": [
      "HTTPS REST API with JSON",
      "SMTP is also supported for sending email"
    ],
    "sdk_languages": [
      "Node.js, Ruby, PHP, Python, Elixir, Go, Java, and Rust"
    ],
    "commercial_use": "Commercial use is permitted subject to Resend's Terms of Service and acceptable-use requirements",
    "self_hostable": "No (Resend is documented as a hosted email API; no self-hosting option is offered)",
    "webhooks": "Yes",
    "rate_limit": "Free plan: 2 requests per second; 100 emails per day and 3,000 emails per month",
    "free_tier_reset": "daily and monthly (100 emails/day and 3,000 emails/month)",
    "uses": [
      "transactional email",
      "email templates",
      "domains/senders",
      "delivery events",
      "attachments",
      "webhooks"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://resend.com/pricing",
      "source_1": "https://resend.com/docs/api-reference/introduction",
      "source_2": "https://resend.com/docs/api-reference/introduction",
      "source_3": "https://resend.com/docs/sdks"
    }
  },
  {
    "name": "SendGrid",
    "category": "Email",
    "description": "Transactional and marketing email API.",
    "signup_url": "https://app.sendgrid.com/settings/api_keys",
    "pricing_url": "https://sendgrid.com/en-us/pricing",
    "documentation_url": "https://sendgrid.com/en-us/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "API-key management URL verified; current free allowance is not asserted here.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": false,
    "authentication": "API key using the Authorization: Bearer HTTP header; SMTP relay uses SMTP credentials",
    "protocols": [
      "HTTPS REST API with JSON and SMTP relay"
    ],
    "sdk_languages": [
      "C#, Go, Java, Node.js, PHP, Python, and Ruby"
    ],
    "commercial_use": "Commercial use is permitted subject to Twilio's Terms of Service and SendGrid acceptable-use policy",
    "self_hostable": "No (SendGrid is provided as a Twilio hosted service; official materials do not offer self-hosting)",
    "webhooks": "Yes (Event Webhook and Inbound Parse Webhook)",
    "rate_limit": "API rate limits vary by endpoint and account/plan; SendGrid publishes endpoint-specific limits in its API reference",
    "free_tier_reset": "daily (free plan allows 100 emails per day)",
    "uses": [
      "transactional email",
      "marketing email",
      "templates",
      "contacts",
      "delivery analytics",
      "webhooks"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://sendgrid.com/en-us/pricing",
      "source_1": "https://docs.sendgrid.com/for-developers/sending-email/api-getting-started",
      "source_2": "https://docs.sendgrid.com/for-developers/sending-email/api-getting-started",
      "source_3": "https://docs.sendgrid.com/for-developers/sending-email/quickstart-nodejs"
    }
  },
  {
    "name": "Twilio",
    "category": "SMS / Communications",
    "description": "SMS, voice and communications APIs.",
    "signup_url": "https://www.twilio.com/console/project/api-keys",
    "pricing_url": "https://www.twilio.com/en-us/pricing",
    "documentation_url": "https://www.twilio.com/docs/usage/tutorials/how-to-use-your-free-trial-account",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "API-key management route verified; current free allowance is not asserted here.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": false,
    "authentication": "HTTP Basic authentication with Account SID and Auth Token; Twilio also documents API keys and OAuth for applicable APIs",
    "protocols": [
      "HTTPS REST APIs",
      "Twilio also supports webhooks over HTTP/HTTPS"
    ],
    "sdk_languages": [
      "C#, Java, Node.js, PHP, Python, Ruby, and Go (official Twilio helper libraries)"
    ],
    "commercial_use": "Commercial use is permitted subject to Twilio's Terms of Service and applicable product-specific terms; compliance, acceptable-use, and payment obligations apply",
    "self_hostable": "No (Twilio documents hosted cloud services and does not publish a self-hosting option for its APIs)",
    "webhooks": "Yes",
    "rate_limit": "Limits vary by product/API; Twilio publishes endpoint/product-specific rate-limit guidance rather than one universal limit",
    "free_tier_reset": "Credits (trial account credit; not described as a recurring daily/monthly free allowance)",
    "uses": [
      "SMS/MMS",
      "voice",
      "WhatsApp",
      "phone numbers",
      "verification",
      "messaging/communications workflows"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.twilio.com/docs/usage/tutorials/how-to-use-your-free-trial-account",
      "source_1": "https://www.twilio.com/docs/usage/api",
      "source_2": "https://www.twilio.com/docs/usage/api",
      "source_3": "https://www.twilio.com/docs/libraries"
    }
  },
  {
    "name": "Alpha Vantage",
    "category": "Finance / Market Data",
    "description": "Stocks, forex, crypto and economic data APIs.",
    "signup_url": "https://www.alphavantage.co/support/#api-key",
    "pricing_url": "https://www.alphavantage.co/premium/",
    "documentation_url": "https://www.alphavantage.co/support/#api-key",
    "free_tier": {
      "has_free_tier": true,
      "type": "rate-limited-free",
      "details": "Official support page offers a free API key with lifetime access.",
      "amount": "25 API requests/minute; unlimited requests for verified open-source or educational projects",
      "expiry": "Lifetime access stated on official key page"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key passed as the apikey query parameter",
    "protocols": [
      "HTTPS API returning JSON or CSV"
    ],
    "sdk_languages": [
      "Unavailable (the official documentation describes the HTTP API",
      "it does not publish an official SDK-language list)"
    ],
    "commercial_use": "Commercial-use terms are not clearly specified on the public API documentation/pricing pages; consult the provider's terms",
    "self_hostable": "No official self-hosting option published",
    "webhooks": "Unavailable (not documented in the official API documentation)",
    "rate_limit": "Free access: up to 25 API requests per day; standard/demo limits are also described by the provider as subject to change",
    "free_tier_reset": "Daily (25 requests per day on the free access tier)",
    "uses": [
      "stock/forex/crypto data",
      "historical prices",
      "technical indicators",
      "fundamental data",
      "economic indicators",
      "market news"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.alphavantage.co/support/#api-key",
      "source_1": "https://www.alphavantage.co/documentation/",
      "source_2": "https://www.alphavantage.co/documentation/",
      "source_3": "https://www.alphavantage.co/documentation/"
    }
  },
  {
    "name": "SerpApi",
    "category": "Search / Web Data",
    "description": "Search-engine results API.",
    "signup_url": "https://serpapi.com/dashboard",
    "pricing_url": "https://serpapi.com/pricing",
    "documentation_url": "https://serpapi.com/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Dashboard/key route verified; current free allowance is not asserted here.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": false,
    "authentication": "API key supplied as the api_key query parameter (or through the official client configuration)",
    "protocols": [
      "HTTPS GET search API",
      "responses are available as JSON (and other documented formats)"
    ],
    "sdk_languages": [
      "Ruby, Python, PHP, JavaScript/Node.js, Java, and Go (officially documented client libraries/integrations)"
    ],
    "commercial_use": "Commercial use is governed by SerpApi's Terms of Service and paid-plan terms; users must comply with applicable law and usage restrictions",
    "self_hostable": "No (SerpApi documents a hosted service and does not publish a self-hosting license or deployment option)",
    "webhooks": "Unavailable (not documented as a general Search API feature)",
    "rate_limit": "Plan-based: the pricing page specifies searches per month for each plan; no single universal requests-per-second limit is published there",
    "free_tier_reset": "Monthly (free plan includes a monthly search allowance)",
    "uses": [
      "search engine results",
      "Google/Bing/etc. search extraction",
      "shopping/news/image results where supported",
      "structured SERP data"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://serpapi.com/pricing",
      "source_1": "https://serpapi.com/search-api",
      "source_2": "https://serpapi.com/search-api",
      "source_3": "https://serpapi.com/integrations"
    }
  },
  {
    "name": "Tavily",
    "category": "Search / Research",
    "description": "Search and research API for AI applications.",
    "signup_url": "https://app.tavily.com/home",
    "pricing_url": "https://tavily.com/pricing",
    "documentation_url": "https://tavily.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Dashboard route verified; current free allowance is not asserted here.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [
      "Unavailable"
    ],
    "sdk_languages": [
      "Unavailable"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "web search",
      "AI-focused research search",
      "content retrieval",
      "source extraction",
      "search result filtering"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://tavily.com/",
      "source_1": "https://docs.tavily.com/",
      "source_2": "https://docs.tavily.com/",
      "source_3": "https://docs.tavily.com/"
    }
  },
  {
    "name": "AI21 Labs",
    "category": "AI / ML",
    "description": "Cataloged API provider.",
    "signup_url": "https://studio.ai21.com",
    "pricing_url": "https://www.ai21.com/pricing",
    "documentation_url": "https://www.ai21.com/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key supplied in the Authorization header as a Bearer token.",
    "protocols": [
      "HTTPS REST API with JSON requests and responses."
    ],
    "sdk_languages": [
      "Python",
      "JavaScript/TypeScript."
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "No — the AI21 API is a hosted service; the API documentation does not provide a self-deployment option for the API.",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "model inference",
      "text/chat or multimodal AI",
      "classification/extraction",
      "embeddings/semantic search where offered",
      "model deployment/integration"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.ai21.com/pricing",
      "source_1": "https://docs.ai21.com/reference/authentication",
      "source_2": "https://docs.ai21.com/reference/jamba-models",
      "source_3": "https://docs.ai21.com/"
    }
  },
  {
    "name": "AssemblyAI (speech-to-text)",
    "category": "AI / ML",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.assemblyai.com/dashboard/signup",
    "pricing_url": "https://www.assemblyai.com/pricing",
    "documentation_url": "https://www.assemblyai.com/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": false,
    "authentication": "API key sent in the Authorization header.",
    "protocols": [
      "HTTPS REST API for pre-recorded transcription",
      "WebSocket (wss) for streaming transcription."
    ],
    "sdk_languages": [
      "Python, JavaScript/TypeScript, Ruby, and Go SDKs are documented by AssemblyAI."
    ],
    "commercial_use": "AssemblyAI's terms permit customers to use the service for their business/commercial purposes, subject to the Terms of Service and applicable use restrictions.",
    "self_hostable": "No — AssemblyAI documents a hosted API service and does not publish a downloadable or self-deployable version of its speech-to-text API.",
    "webhooks": "Yes — the API supports webhook URLs for asynchronous transcription completion and related events.",
    "rate_limit": "Unavailable — the official pages reviewed do not provide a single generally applicable request-rate limit for the API.",
    "free_tier_reset": "Unavailable — AssemblyAI publishes free credits, but the official pricing page reviewed does not state a recurring daily or monthly reset schedule.",
    "uses": [
      "model inference",
      "text/chat or multimodal AI",
      "classification/extraction",
      "embeddings/semantic search where offered",
      "model deployment/integration"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.assemblyai.com/pricing",
      "source_1": "https://www.assemblyai.com/docs/api-reference/overview",
      "source_2": "https://www.assemblyai.com/docs/api-reference/streaming",
      "source_3": "https://www.assemblyai.com/docs/sdks"
    }
  },
  {
    "name": "Clarifai (vision)",
    "category": "AI / ML",
    "description": "Cataloged API provider.",
    "signup_url": "https://clarifai.com/signup",
    "pricing_url": "https://www.clarifai.com/pricing",
    "documentation_url": "https://www.clarifai.com/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": false,
    "authentication": "Personal Access Tokens (PATs) are sent as Bearer tokens in the Authorization header; OAuth 2.0 is also documented for API authentication.",
    "protocols": [
      "REST/HTTP and gRPC are officially supported API protocols."
    ],
    "sdk_languages": [
      "Official Clarifai SDKs are documented for Python, JavaScript/Node.js, Java, Go, PHP, Ruby, and C#/.NET."
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "Yes — Clarifai documents a separately deployable Clarifai Community platform; the hosted API is a distinct service.",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "monthly",
    "uses": [
      "model inference",
      "text/chat or multimodal AI",
      "classification/extraction",
      "embeddings/semantic search where offered",
      "model deployment/integration"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.clarifai.com/pricing",
      "source_1": "https://docs.clarifai.com/api-guide/authentication",
      "source_2": "https://docs.clarifai.com/api-guide/",
      "source_3": "https://docs.clarifai.com/sdk/"
    }
  },
  {
    "name": "Perplexity API",
    "category": "AI / ML",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.perplexity.ai/settings/api",
    "pricing_url": "https://docs.perplexity.ai/getting-started/pricing",
    "documentation_url": "https://docs.perplexity.ai/getting-started/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": true,
    "authentication": "Bearer API key in the HTTP Authorization header (Authorization: Bearer <YOUR_API_KEY>).",
    "protocols": [
      "HTTPS REST API",
      "supports streamed responses over server-sent events (SSE)."
    ],
    "sdk_languages": [
      "Unavailable — the official documentation describes an OpenAI-compatible API and examples, but does not publish an official provider SDK language list."
    ],
    "commercial_use": "Permitted subject to Perplexity's API Terms of Service and Acceptable Use Policy; users must comply with those terms and applicable law.",
    "self_hostable": "No — the documentation describes Perplexity-hosted API endpoints and does not offer a downloadable or self-deployable Perplexity API service.",
    "webhooks": "Unavailable — no webhook feature is documented in the official API documentation.",
    "rate_limit": "Officially documented rate limits vary by API usage/billing tier; the API rate-limits requests and returns HTTP 429 when a limit is exceeded. See the official rate-limits documentation for the current tier limits.",
    "free_tier_reset": "credits — the official API billing documentation describes promotional/free API credits rather than a recurring daily or monthly reset.",
    "uses": [
      "model inference",
      "text/chat or multimodal AI",
      "classification/extraction",
      "embeddings/semantic search where offered",
      "model deployment/integration"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://docs.perplexity.ai/getting-started/pricing",
      "source_1": "https://docs.perplexity.ai/guides/getting-started",
      "source_2": "https://docs.perplexity.ai/guides/getting-started",
      "source_3": "https://docs.perplexity.ai/guides/getting-started"
    }
  },
  {
    "name": "Roboflow (vision)",
    "category": "AI / ML",
    "description": "Cataloged API provider.",
    "signup_url": "https://app.roboflow.com",
    "pricing_url": "https://roboflow.com/pricing",
    "documentation_url": "https://roboflow.com/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": false,
    "authentication": "API key authentication. Roboflow documents passing the workspace/API key to hosted inference requests (including the `api_key` request parameter; SDKs can read the key from configuration/environment).",
    "protocols": [
      "HTTPS REST/HTTP API (JSON requests/responses)",
      "Roboflow also documents SDK access to its hosted inference services."
    ],
    "sdk_languages": [
      "Python, JavaScript/TypeScript, and other language integrations documented by Roboflow's Inference SDK documentation",
      "the official hosted API can also be called directly over HTTP."
    ],
    "commercial_use": "Commercial use is governed by Roboflow's Terms of Service and the applicable subscription/order terms; use of the hosted service is subject to those terms and plan limits.",
    "self_hostable": "Yes — separately from the hosted API, Roboflow publishes the open-source Inference server/software for deployment on your own infrastructure. The hosted API itself is managed by Roboflow.",
    "webhooks": "Yes — Roboflow documents webhooks as an integration capability for receiving events/results from Roboflow services.",
    "rate_limit": "Unavailable — the reviewed official hosted-inference documentation does not publish a single concrete request-per-minute/second limit applicable to this API; limits may vary by plan/service.",
    "free_tier_reset": "Monthly — the pricing page expresses free-plan usage as a monthly allowance/credits that refreshes monthly.",
    "uses": [
      "model inference",
      "text/chat or multimodal AI",
      "classification/extraction",
      "embeddings/semantic search where offered",
      "model deployment/integration"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://roboflow.com/pricing",
      "source_1": "https://docs.roboflow.com/inference/hosted-api",
      "source_2": "https://docs.roboflow.com/inference/hosted-api",
      "source_3": "https://docs.roboflow.com/inference"
    }
  },
  {
    "name": "Stability AI",
    "category": "AI / ML",
    "description": "Cataloged API provider.",
    "signup_url": "https://platform.stability.ai",
    "pricing_url": "https://platform.stability.ai/pricing",
    "documentation_url": "https://platform.stability.ai/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API-key authentication using the HTTP Authorization header (Bearer token).",
    "protocols": [
      "HTTPS REST API (JSON over HTTP)."
    ],
    "sdk_languages": [
      "Unavailable"
    ],
    "commercial_use": "Use is governed by Stability AI's API Terms of Service and any applicable model-specific license; the official terms should be consulted for commercial-use conditions.",
    "self_hostable": "Yes — Stability AI publishes downloadable model software/weights under model-specific licenses; this is distinct from the hosted Stability AI API.",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "model inference",
      "text/chat or multimodal AI",
      "classification/extraction",
      "embeddings/semantic search where offered",
      "model deployment/integration"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://platform.stability.ai/pricing",
      "source_1": "https://platform.stability.ai/docs/getting-started",
      "source_2": "https://platform.stability.ai/docs/api-reference",
      "source_3": "https://platform.stability.ai/docs/getting-started"
    }
  },
  {
    "name": "Together AI",
    "category": "AI / ML",
    "description": "Cataloged API provider.",
    "signup_url": "https://api.together.ai",
    "pricing_url": "https://www.together.ai/pricing",
    "documentation_url": "https://www.together.ai/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key supplied as a Bearer token in the Authorization header.",
    "protocols": [
      "HTTPS REST API (OpenAI-compatible API endpoints are documented)."
    ],
    "sdk_languages": [
      "Python and JavaScript/TypeScript (official client examples/documentation)."
    ],
    "commercial_use": "Use of the service is governed by Together AI's Terms of Service; the terms and any applicable model license govern permitted commercial use. See the official terms and model pages for applicable restrictions.",
    "self_hostable": "No — the documented Together API is a hosted service; the official API documentation does not present the API itself as downloadable or self-deployable.",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "model inference",
      "text/chat or multimodal AI",
      "classification/extraction",
      "embeddings/semantic search where offered",
      "model deployment/integration"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.together.ai/pricing",
      "source_1": "https://docs.together.ai/docs/api-reference/authentication",
      "source_2": "https://docs.together.ai/docs/openai-api-compatibility",
      "source_3": "https://docs.together.ai/docs/sdks"
    }
  },
  {
    "name": "Amazon Comprehend",
    "category": "AI / ML (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://aws.amazon.com/comprehend/",
    "pricing_url": "https://aws.amazon.com/comprehend/pricing/",
    "documentation_url": "https://aws.amazon.com/comprehend/pricing/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "AWS Identity and Access Management (IAM) credentials using AWS Signature Version 4 (SigV4) request signing; requests can also be made through AWS SDKs and the AWS CLI.",
    "protocols": [
      "HTTPS (Amazon Comprehend API uses HTTPS endpoints and JSON protocol requests)."
    ],
    "sdk_languages": [
      "AWS SDKs are officially documented for C++, Go, Java, JavaScript, .NET, PHP, Python (Boto3), Ruby, and Rust."
    ],
    "commercial_use": "Commercial use is governed by the AWS Customer Agreement and applicable AWS Service Terms; Amazon Comprehend usage is billed according to AWS pricing. The AWS Customer Agreement grants the customer a non-exclusive, limited right to use AWS Services during the term, subject to the agreement.",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "AWS publishes service quotas rather than one universal limit. The Amazon Comprehend quotas page lists operation-specific quotas, including synchronous API request rates and adjustable quotas; consult the official Service Quotas table for the current per-operation values.",
    "free_tier_reset": "monthly (the pricing page describes a free tier of 50,000 units of text requests per month for the first 12 months, subject to the stated conditions).",
    "uses": [
      "model inference",
      "text/chat or multimodal AI",
      "classification/extraction",
      "embeddings/semantic search where offered",
      "model deployment/integration"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://aws.amazon.com/comprehend/pricing/",
      "source_1": "https://docs.aws.amazon.com/comprehend/latest/dg/access-control-overview.html",
      "source_2": "https://docs.aws.amazon.com/comprehend/latest/dg/using-api.html",
      "source_3": "https://docs.aws.amazon.com/comprehend/latest/dg/API_Reference.html"
    }
  },
  {
    "name": "Amazon Polly",
    "category": "AI / ML (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://aws.amazon.com/polly/",
    "pricing_url": "https://aws.amazon.com/polly/pricing/",
    "documentation_url": "https://aws.amazon.com/free/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": true,
    "authentication": "AWS Identity and Access Management (IAM) credentials using AWS Signature Version 4 (SigV4) request signing; AWS SDKs can provide the signing implementation.",
    "protocols": [
      "HTTPS",
      "AWS JSON protocol/API operations."
    ],
    "sdk_languages": [
      "C++, Go, Java, JavaScript, Kotlin, .NET, PHP, Python (Boto3), Ruby, Rust, and Swift."
    ],
    "commercial_use": "AWS service terms apply; customers may use Amazon Polly as an AWS service for business purposes, subject to the AWS Customer Agreement and applicable service terms. Generated speech is governed by AWS terms and the applicable Polly pricing/terms.",
    "self_hostable": "No — Amazon Polly is documented and sold as an AWS cloud service/API; the official documentation does not provide downloadable or self-deployable Polly software.",
    "webhooks": "Unavailable",
    "rate_limit": "Service quotas document SynthesizeSpeech request rates of 80 transactions/second for Standard voices and 8 transactions/second for Neural voices (regional service quotas; quotas can be requested for increase).",
    "free_tier_reset": "Monthly — the Polly free tier includes 5 million characters per month for the first 12 months for Standard voices and 1 million characters per month for Neural voices (new AWS customers; subject to AWS Free Tier terms).",
    "uses": [
      "model inference",
      "text/chat or multimodal AI",
      "classification/extraction",
      "embeddings/semantic search where offered",
      "model deployment/integration"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://aws.amazon.com/free/",
      "source_1": "https://docs.aws.amazon.com/polly/latest/dg/api-authentication.html",
      "source_2": "https://docs.aws.amazon.com/polly/latest/dg/API_Reference.html",
      "source_3": "https://docs.aws.amazon.com/polly/latest/dg/API_Reference.html"
    }
  },
  {
    "name": "Amazon Rekognition",
    "category": "AI / ML (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://aws.amazon.com/rekognition/",
    "pricing_url": "https://aws.amazon.com/rekognition/pricing/",
    "documentation_url": "https://aws.amazon.com/free/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": true,
    "authentication": "AWS Identity and Access Management (IAM) credentials; requests to the API are authenticated using AWS Signature Version 4 (SigV4).",
    "protocols": [
      "HTTPS",
      "AWS Rekognition API uses JSON over HTTPS (AWS Query/JSON protocol as documented for the service API)."
    ],
    "sdk_languages": [
      "C++, Go, Java, JavaScript, .NET, PHP, Python (Boto3), Ruby, and Rust (AWS SDKs)."
    ],
    "commercial_use": "Commercial use is permitted subject to the AWS Customer Agreement, AWS Service Terms, and applicable Amazon Rekognition service terms and restrictions; AWS bills usage under the published pricing terms.",
    "self_hostable": "No — Amazon Rekognition is provided as an AWS cloud service/API; AWS does not publish a downloadable or self-deployable Rekognition server in the official service documentation.",
    "webhooks": "Unavailable",
    "rate_limit": "Service quotas are operation-specific. The published default quotas include 50 transactions per second (TPS) for DetectLabels and 50 TPS for DetectFaces; quotas may vary by Region/operation and some are adjustable by requesting a quota increase.",
    "free_tier_reset": "monthly — the Rekognition pricing page publishes a Free Tier allowance of 5,000 images per month and 1,000 minutes of video per month for the first 12 months (subject to AWS Free Tier terms).",
    "uses": [
      "model inference",
      "text/chat or multimodal AI",
      "classification/extraction",
      "embeddings/semantic search where offered",
      "model deployment/integration"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://aws.amazon.com/free/",
      "source_1": "https://docs.aws.amazon.com/rekognition/latest/dg/security-iam.html",
      "source_2": "https://docs.aws.amazon.com/rekognition/latest/APIReference/API_Reference.html",
      "source_3": "https://docs.aws.amazon.com/rekognition/latest/APIReference/API_Reference.html"
    }
  },
  {
    "name": "Amazon Transcribe",
    "category": "AI / ML (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://aws.amazon.com/transcribe/",
    "pricing_url": "https://aws.amazon.com/transcribe/pricing/",
    "documentation_url": "https://aws.amazon.com/transcribe/pricing/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "AWS credentials (IAM)",
    "protocols": [
      "HTTPS",
      "WebSocket (streaming)"
    ],
    "sdk_languages": [
      "C++",
      "Go",
      "Java",
      ".NET",
      "PHP",
      "Python (Boto3)",
      "Ruby",
      "JavaScript"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "No; AWS managed service",
    "webhooks": "Unavailable",
    "rate_limit": "Service quotas published; quotas vary by operation and region",
    "free_tier_reset": "12 months after AWS account creation (eligible usage)",
    "uses": [
      "model inference",
      "text/chat or multimodal AI",
      "classification/extraction",
      "embeddings/semantic search where offered",
      "model deployment/integration"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://aws.amazon.com/transcribe/pricing/",
      "source_1": "https://docs.aws.amazon.com/transcribe/latest/dg/getting-started.html",
      "source_2": "https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html",
      "source_3": "https://docs.aws.amazon.com/transcribe/latest/dg/getting-started.html"
    }
  },
  {
    "name": "Baseten",
    "category": "AI / ML (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.baseten.co",
    "pricing_url": "https://www.baseten.co/pricing/",
    "documentation_url": "https://www.baseten.co/pricing/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key",
    "protocols": [
      "HTTPS/REST"
    ],
    "sdk_languages": [
      "Python"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "model inference",
      "text/chat or multimodal AI",
      "classification/extraction",
      "embeddings/semantic search where offered",
      "model deployment/integration"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.baseten.co/pricing/",
      "source_1": "https://docs.baseten.co/reference/authentication",
      "source_2": "https://docs.baseten.co/reference",
      "source_3": "https://docs.baseten.co/reference"
    }
  },
  {
    "name": "Dialogflow (Google)",
    "category": "AI / ML (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://dialogflow.cloud.google.com",
    "pricing_url": "https://cloud.google.com/dialogflow/pricing",
    "documentation_url": "https://cloud.google.com/dialogflow/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Google Cloud authentication (API keys and OAuth 2.0/service accounts, as applicable)",
    "protocols": [
      "HTTPS/gRPC"
    ],
    "sdk_languages": [
      "C#, Go, Java, Node.js, PHP, Python, Ruby"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Supported",
    "rate_limit": "Quotas documented by edition/API; see official quotas page",
    "free_tier_reset": "Unavailable",
    "uses": [
      "model inference",
      "text/chat or multimodal AI",
      "classification/extraction",
      "embeddings/semantic search where offered",
      "model deployment/integration"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://cloud.google.com/dialogflow/pricing",
      "source_1": "https://cloud.google.com/dialogflow/docs/authentication",
      "source_2": "https://cloud.google.com/dialogflow/docs/reference",
      "source_3": "https://cloud.google.com/dialogflow/docs/reference/libraries"
    }
  },
  {
    "name": "Fireworks AI",
    "category": "AI / ML (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://fireworks.ai",
    "pricing_url": "https://fireworks.ai/pricing",
    "documentation_url": "https://fireworks.ai/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key",
    "protocols": [
      "HTTPS/REST"
    ],
    "sdk_languages": [
      "Python, JavaScript/TypeScript"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "model inference",
      "text/chat or multimodal AI",
      "classification/extraction",
      "embeddings/semantic search where offered",
      "model deployment/integration"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://fireworks.ai/pricing",
      "source_1": "https://docs.fireworks.ai/getting-started/quickstart",
      "source_2": "https://docs.fireworks.ai/api-reference/introduction",
      "source_3": "https://docs.fireworks.ai/getting-started/quickstart"
    }
  },
  {
    "name": "Google Cloud Natural Language",
    "category": "AI / ML (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://console.cloud.google.com/apis/library/language.googleapis.com",
    "pricing_url": "https://cloud.google.com/natural-language/pricing",
    "documentation_url": "https://cloud.google.com/natural-language/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Google Cloud authentication (API keys or OAuth 2.0/service accounts)",
    "protocols": [
      "HTTPS/REST, gRPC"
    ],
    "sdk_languages": [
      "C#, Go, Java, Node.js, PHP, Python, Ruby"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Quotas documented by API",
    "free_tier_reset": "Unavailable",
    "uses": [
      "model inference",
      "text/chat or multimodal AI",
      "classification/extraction",
      "embeddings/semantic search where offered",
      "model deployment/integration"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://cloud.google.com/natural-language/pricing",
      "source_1": "https://cloud.google.com/natural-language/docs/auth",
      "source_2": "https://cloud.google.com/natural-language/docs/reference/rest",
      "source_3": "https://cloud.google.com/natural-language/docs/reference/libraries"
    }
  },
  {
    "name": "Google Cloud Vision API",
    "category": "AI / ML (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://console.cloud.google.com/apis/library/vision.googleapis.com",
    "pricing_url": "https://cloud.google.com/vision/pricing",
    "documentation_url": "https://cloud.google.com/vision/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Google Cloud authentication (API keys or OAuth 2.0/service accounts)",
    "protocols": [
      "HTTPS/REST, gRPC"
    ],
    "sdk_languages": [
      "C#, Go, Java, Node.js, PHP, Python, Ruby"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Quotas documented by API",
    "free_tier_reset": "Unavailable",
    "uses": [
      "model inference",
      "text/chat or multimodal AI",
      "classification/extraction",
      "embeddings/semantic search where offered",
      "model deployment/integration"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://cloud.google.com/vision/pricing",
      "source_1": "https://cloud.google.com/vision/docs/auth",
      "source_2": "https://cloud.google.com/vision/docs/reference",
      "source_3": "https://cloud.google.com/vision/docs/reference/libraries"
    }
  },
  {
    "name": "IBM Watson (Cloud)",
    "category": "AI / ML (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://cloud.ibm.com/registration",
    "pricing_url": "https://www.ibm.com/products/watsonx-assistant/pricing",
    "documentation_url": "https://www.ibm.com/products/watsonx-assistant/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "IAM API key / bearer token",
    "protocols": [
      "HTTPS/REST"
    ],
    "sdk_languages": [
      "Unavailable"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "model inference",
      "text/chat or multimodal AI",
      "classification/extraction",
      "embeddings/semantic search where offered",
      "model deployment/integration"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.ibm.com/products/watsonx-assistant/pricing",
      "source_1": "https://cloud.ibm.com/apidocs/ Watson authentication documentation",
      "source_2": "https://cloud.ibm.com/apidocs",
      "source_3": "https://cloud.ibm.com/apidocs"
    }
  },
  {
    "name": "Jina AI",
    "category": "AI / ML (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://jina.ai",
    "pricing_url": "https://jina.ai/pricing",
    "documentation_url": "https://jina.ai/api-key/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key in Authorization: Bearer header",
    "protocols": [
      "HTTPS REST API"
    ],
    "sdk_languages": [
      "Python, JavaScript/TypeScript (official examples/clients)"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "model inference",
      "text/chat or multimodal AI",
      "classification/extraction",
      "embeddings/semantic search where offered",
      "model deployment/integration"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://jina.ai/api-key/",
      "source_1": "https://jina.ai/api-key/",
      "source_2": "https://jina.ai/reader/",
      "source_3": "https://jina.ai/embeddings/"
    }
  },
  {
    "name": "Microsoft Azure AI Services",
    "category": "AI / ML (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://azure.microsoft.com/en-us/products/ai-services",
    "pricing_url": "https://azure.microsoft.com/en-us/pricing/details/cognitive-services/",
    "documentation_url": "https://azure.microsoft.com/en-us/free/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "A payment instrument is generally required to continue Azure beyond the free account offer; requirements vary by subscription/region",
    "authentication": "Microsoft Entra ID or Azure resource API keys (depending on service)",
    "protocols": [
      "HTTPS REST APIs",
      "service-specific SDK protocols"
    ],
    "sdk_languages": [
      "C#, Python, Java, JavaScript/TypeScript, Go (service-dependent)"
    ],
    "commercial_use": "Available under Microsoft Azure commercial terms",
    "self_hostable": "Unavailable for Azure-hosted services (some separately licensed/offline offerings may differ)",
    "webhooks": "Unavailable as a platform-wide Azure AI Services feature",
    "rate_limit": "Service- and pricing-tier-specific; documented per service",
    "free_tier_reset": "Unavailable as a single platform-wide schedule; service-specific",
    "uses": [
      "model inference",
      "text/chat or multimodal AI",
      "classification/extraction",
      "embeddings/semantic search where offered",
      "model deployment/integration"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://azure.microsoft.com/en-us/free/",
      "source_1": "https://learn.microsoft.com/en-us/azure/ai-services/authentication",
      "source_2": "https://learn.microsoft.com/en-us/azure/ai-services/reference-rest-api-resources",
      "source_3": "https://learn.microsoft.com/en-us/azure/ai-services/"
    }
  },
  {
    "name": "Modal",
    "category": "AI / ML (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://modal.com",
    "pricing_url": "https://modal.com/pricing",
    "documentation_url": "https://modal.com/docs/guide/billing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Modal token / CLI authentication",
    "protocols": [
      "HTTPS",
      "Modal Python SDK and CLI"
    ],
    "sdk_languages": [
      "Python"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "No (Modal is a hosted service)",
    "webhooks": "HTTP web endpoints are supported",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "model inference",
      "text/chat or multimodal AI",
      "classification/extraction",
      "embeddings/semantic search where offered",
      "model deployment/integration"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://modal.com/docs/guide/billing",
      "source_1": "https://modal.com/docs/reference/modal.client",
      "source_2": "https://modal.com/docs/guide",
      "source_3": "https://modal.com/docs/guide"
    }
  },
  {
    "name": "RunPod",
    "category": "AI / ML (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.runpod.io",
    "pricing_url": "https://www.runpod.io/pricing",
    "documentation_url": "https://docs.runpod.io/get-started/billing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "A payment method is required for account funding; exact signup requirement is not published as a universal rule",
    "authentication": "API key",
    "protocols": [
      "HTTPS REST API and GraphQL API"
    ],
    "sdk_languages": [
      "Python (official SDK)",
      "other languages via APIs"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Webhooks supported for serverless endpoints",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "model inference",
      "text/chat or multimodal AI",
      "classification/extraction",
      "embeddings/semantic search where offered",
      "model deployment/integration"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://docs.runpod.io/get-started/billing",
      "source_1": "https://docs.runpod.io/get-started/api-keys",
      "source_2": "https://docs.runpod.io/reference/intro",
      "source_3": "https://docs.runpod.io/sdks/python"
    }
  },
  {
    "name": "Voyage AI (embeddings)",
    "category": "AI / ML (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.voyageai.com",
    "pricing_url": "https://docs.voyageai.com/docs/pricing",
    "documentation_url": "https://docs.voyageai.com/docs/api-key-and-authentication",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key in Authorization: Bearer header",
    "protocols": [
      "HTTPS REST API",
      "Python SDK"
    ],
    "sdk_languages": [
      "Python"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "model inference",
      "text/chat or multimodal AI",
      "classification/extraction",
      "embeddings/semantic search where offered",
      "model deployment/integration"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://docs.voyageai.com/docs/api-key-and-authentication",
      "source_1": "https://docs.voyageai.com/docs/api-key-and-authentication",
      "source_2": "https://docs.voyageai.com/docs/embeddings",
      "source_3": "https://docs.voyageai.com/docs/embeddings"
    }
  },
  {
    "name": "Wit.ai (Meta)",
    "category": "AI / ML (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://wit.ai",
    "pricing_url": "https://wit.ai/faq",
    "documentation_url": "https://wit.ai/docs/quickstart",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": false,
    "authentication": "Wit.ai access token using Bearer authentication",
    "protocols": [
      "HTTPS REST API",
      "webhooks for Messenger/integrations"
    ],
    "sdk_languages": [
      "Node.js, Python, Ruby (official/community SDK documentation varies)"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Supported for bot integrations",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "model inference",
      "text/chat or multimodal AI",
      "classification/extraction",
      "embeddings/semantic search where offered",
      "model deployment/integration"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://wit.ai/docs/quickstart",
      "source_1": "https://wit.ai/docs/http/20230215",
      "source_2": "https://wit.ai/docs/http/20230215",
      "source_3": "https://wit.ai/docs"
    }
  },
  {
    "name": "Amplitude API",
    "category": "Analytics",
    "description": "Cataloged API provider.",
    "signup_url": "https://amplitude.com",
    "pricing_url": "https://amplitude.com/pricing",
    "documentation_url": "https://amplitude.com/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": false,
    "authentication": "API key and secret key for HTTP APIs; OAuth 2.0 for supported APIs",
    "protocols": [
      "HTTPS/REST",
      "HTTP APIs"
    ],
    "sdk_languages": [
      "JavaScript, TypeScript, Java, Swift, Kotlin, Android, iOS, React Native, Flutter, Unity, Python, Go, Ruby, PHP, C#"
    ],
    "commercial_use": "Available on paid commercial plans; license/terms govern use",
    "self_hostable": "No; Amplitude is documented as a cloud service",
    "webhooks": "Unavailable",
    "rate_limit": "Varies by API; documented per endpoint/plan",
    "free_tier_reset": "Monthly (free plan usage limits are monthly)",
    "uses": [
      "event tracking",
      "product/user analytics",
      "funnels/retention",
      "segments/cohorts",
      "reports/data retrieval"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://amplitude.com/pricing",
      "source_1": "https://www.docs.developers.amplitude.com/analytics/apis/",
      "source_2": "https://www.docs.developers.amplitude.com/analytics/apis/",
      "source_3": "https://www.docs.developers.amplitude.com/data/sdks/"
    }
  },
  {
    "name": "Google Analytics API",
    "category": "Analytics",
    "description": "Cataloged API provider.",
    "signup_url": "https://developers.google.com/analytics",
    "pricing_url": "https://marketingplatform.google.com/about/analytics-360/pricing/",
    "documentation_url": "https://support.google.com/analytics/answer/10285842",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": false,
    "authentication": "OAuth 2.0 and service-account credentials; API key where applicable",
    "protocols": [
      "HTTPS/REST",
      "gRPC for Google Analytics Data API"
    ],
    "sdk_languages": [
      "Java, Python, Node.js, PHP, Ruby, Go, .NET"
    ],
    "commercial_use": "Yes, subject to Google Analytics Terms of Service and applicable Google APIs terms",
    "self_hostable": "No",
    "webhooks": "Unavailable",
    "rate_limit": "Data API quotas include per-property and per-project token limits; exact limits documented by quota table",
    "free_tier_reset": "Daily (quota replenishment is documented as daily for relevant quotas)",
    "uses": [
      "event tracking",
      "product/user analytics",
      "funnels/retention",
      "segments/cohorts",
      "reports/data retrieval"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://support.google.com/analytics/answer/10285842",
      "source_1": "https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport",
      "source_2": "https://developers.google.com/analytics/devguides/reporting/data/v1",
      "source_3": "https://developers.google.com/analytics/devguides/reporting/data/v1/quickstarts"
    }
  },
  {
    "name": "Mixpanel API",
    "category": "Analytics",
    "description": "Cataloged API provider.",
    "signup_url": "https://mixpanel.com",
    "pricing_url": "https://mixpanel.com/pricing/",
    "documentation_url": "https://mixpanel.com/pricing/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": false,
    "authentication": "Service account, project secret, OAuth 2.0, or basic authentication depending on API",
    "protocols": [
      "HTTPS/REST"
    ],
    "sdk_languages": [
      "JavaScript, Node.js, Python, Java, PHP, Ruby, Go, C#, Swift, Kotlin, Android, iOS"
    ],
    "commercial_use": "Yes, subject to Mixpanel Terms of Use and plan terms",
    "self_hostable": "No",
    "webhooks": "Yes; Mixpanel supports webhooks for selected exports/integrations, not universally across APIs",
    "rate_limit": "Endpoint-specific; commonly documented as requests per second and/or concurrent request limits",
    "free_tier_reset": "Monthly (free plan usage is described monthly)",
    "uses": [
      "event tracking",
      "product/user analytics",
      "funnels/retention",
      "segments/cohorts",
      "reports/data retrieval"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://mixpanel.com/pricing/",
      "source_1": "https://developer.mixpanel.com/reference/authentication",
      "source_2": "https://developer.mixpanel.com/reference/overview",
      "source_3": "https://developer.mixpanel.com/docs/sdks"
    }
  },
  {
    "name": "Segment API",
    "category": "Analytics",
    "description": "Cataloged API provider.",
    "signup_url": "https://segment.com",
    "pricing_url": "https://segment.com/pricing/",
    "documentation_url": "https://segment.com/pricing/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Bearer access token for public APIs; HTTP source write key for tracking APIs",
    "protocols": [
      "HTTPS/REST",
      "HTTP event ingestion"
    ],
    "sdk_languages": [
      "JavaScript, Node.js, Python, Ruby, PHP, Java, .NET, Go, Android, iOS, Swift, Kotlin, React Native"
    ],
    "commercial_use": "Yes, subject to Twilio Segment terms and subscription agreement",
    "self_hostable": "No; Segment is a hosted Twilio service",
    "webhooks": "Yes; Destination Functions and webhook destinations are documented",
    "rate_limit": "Varies by API and plan; documented in API reference",
    "free_tier_reset": "Unavailable",
    "uses": [
      "event tracking",
      "product/user analytics",
      "funnels/retention",
      "segments/cohorts",
      "reports/data retrieval"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://segment.com/pricing/",
      "source_1": "https://segment.com/docs/api/public-api/",
      "source_2": "https://segment.com/docs/connections/sources/catalog/libraries/server/http-api/",
      "source_3": "https://segment.com/docs/connections/sources/catalog/libraries/"
    }
  },
  {
    "name": "Alchemy API",
    "category": "Blockchain / Web3",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.alchemy.com",
    "pricing_url": "https://www.alchemy.com/pricing",
    "documentation_url": "https://www.alchemy.com/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": false,
    "authentication": "API key in URL path; some APIs also support authenticated headers/tokens",
    "protocols": [
      "HTTPS/JSON-RPC",
      "REST",
      "WebSockets"
    ],
    "sdk_languages": [
      "JavaScript/TypeScript, Python, Java, Go, Rust, PHP, and Ruby (official SDKs/tools vary)"
    ],
    "commercial_use": "Yes on paid plans, subject to Alchemy terms and plan limits",
    "self_hostable": "No; Alchemy is a hosted node/API platform",
    "webhooks": "Yes; Alchemy Notify webhooks",
    "rate_limit": "Compute-unit based throughput and endpoint-specific limits; plan-dependent",
    "free_tier_reset": "Monthly (free plan compute units reset monthly)",
    "uses": [
      "blockchain RPC/node access",
      "wallet/transaction data",
      "token/NFT data",
      "smart-contract data",
      "on-chain analytics"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.alchemy.com/pricing",
      "source_1": "https://www.alchemy.com/docs/reference/api-keys",
      "source_2": "https://www.alchemy.com/docs/reference/api-overview",
      "source_3": "https://www.alchemy.com/docs"
    }
  },
  {
    "name": "Infura API",
    "category": "Blockchain / Web3",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.infura.io",
    "pricing_url": "https://www.infura.io/pricing",
    "documentation_url": "https://www.infura.io/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": false,
    "authentication": "Project ID/API key in endpoint URL; JWT authentication for some services",
    "protocols": [
      "HTTPS/JSON-RPC",
      "WebSockets",
      "REST for selected APIs"
    ],
    "sdk_languages": [
      "Unavailable as a complete provider SDK-language list",
      "official docs provide language-specific examples/tools"
    ],
    "commercial_use": "Yes, subject to Consensys/Infura terms and plan limits",
    "self_hostable": "No; Infura is a hosted infrastructure service",
    "webhooks": "Unavailable",
    "rate_limit": "Plan- and network-specific request/throughput limits; documented in product limits",
    "free_tier_reset": "Monthly (free plan usage limits are monthly)",
    "uses": [
      "blockchain RPC/node access",
      "wallet/transaction data",
      "token/NFT data",
      "smart-contract data",
      "on-chain analytics"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.infura.io/pricing",
      "source_1": "https://docs.metamask.io/services/reference/",
      "source_2": "https://docs.metamask.io/services/reference/ethereum/json-rpc-methods/",
      "source_3": "https://docs.metamask.io/services/"
    }
  },
  {
    "name": "Moralis API",
    "category": "Blockchain / Web3",
    "description": "Cataloged API provider.",
    "signup_url": "https://moralis.io",
    "pricing_url": "https://moralis.io/pricing/",
    "documentation_url": "https://moralis.io/pricing/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key",
    "protocols": [
      "REST API"
    ],
    "sdk_languages": [
      "JavaScript",
      "Python"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": true,
    "rate_limit": "The free plan is limited to 25 requests per second; paid-plan limits are published on the pricing page.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "blockchain RPC/node access",
      "wallet/transaction data",
      "token/NFT data",
      "smart-contract data",
      "on-chain analytics"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://moralis.io/pricing/",
      "source_1": "https://docs.moralis.io/web3-data-api/evm/get-your-api-key",
      "source_2": "https://docs.moralis.io/web3-data-api/evm/intro",
      "source_3": "https://docs.moralis.io/web3-data-api/evm/quickstart"
    }
  },
  {
    "name": "QuickNode",
    "category": "Blockchain / Web3",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.quicknode.com",
    "pricing_url": "https://www.quicknode.com/pricing",
    "documentation_url": "https://www.quicknode.com/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "HTTP authentication using an endpoint URL; API key authentication is supported for authenticated APIs.",
    "protocols": [
      "HTTP",
      "WebSocket"
    ],
    "sdk_languages": [
      "JavaScript",
      "Python",
      "Go",
      "Ruby"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": true,
    "rate_limit": "Rate limits vary by plan and are published in the plan details.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "blockchain RPC/node access",
      "wallet/transaction data",
      "token/NFT data",
      "smart-contract data",
      "on-chain analytics"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.quicknode.com/pricing",
      "source_1": "https://www.quicknode.com/docs",
      "source_2": "https://www.quicknode.com/docs/quicknode-guide/quicknode-products/endpoint-types",
      "source_3": "https://www.quicknode.com/docs"
    }
  },
  {
    "name": "The Graph",
    "category": "Blockchain / Web3",
    "description": "Cataloged API provider.",
    "signup_url": "https://thegraph.com",
    "pricing_url": "https://thegraph.com/pricing/",
    "documentation_url": "https://thegraph.com/pricing/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key (query key) for the hosted Subgraph gateway.",
    "protocols": [
      "GraphQL",
      "REST"
    ],
    "sdk_languages": [
      "JavaScript",
      "TypeScript"
    ],
    "commercial_use": "The Graph Network is available for production and commercial applications subject to its terms.",
    "self_hostable": true,
    "webhooks": false,
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "blockchain RPC/node access",
      "wallet/transaction data",
      "token/NFT data",
      "smart-contract data",
      "on-chain analytics"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://thegraph.com/pricing/",
      "source_1": "https://thegraph.com/docs/en/querying/querying-subgraphs/",
      "source_2": "https://thegraph.com/docs/en/querying/querying-subgraphs/",
      "source_3": "https://thegraph.com/docs/en/developing/creating-a-subgraph/"
    }
  },
  {
    "name": "Ably (realtime)",
    "category": "Dev Tools / Infra",
    "description": "Cataloged API provider.",
    "signup_url": "https://ably.com/sign-up",
    "pricing_url": "https://ably.com/pricing",
    "documentation_url": "https://ably.com/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API keys and token authentication (JWT, token requests, and token details).",
    "protocols": [
      "WebSocket",
      "SSE",
      "HTTP"
    ],
    "sdk_languages": [
      "JavaScript",
      "iOS",
      "Android",
      "Java",
      ".NET",
      "Ruby",
      "Python",
      "PHP",
      "Go",
      "Flutter",
      "Unity"
    ],
    "commercial_use": "Commercial use is permitted under the Ably service terms.",
    "self_hostable": false,
    "webhooks": true,
    "rate_limit": "Limits are documented by feature and plan in Ably's limits documentation.",
    "free_tier_reset": "Monthly",
    "uses": [
      "API/resource management",
      "deployment/infrastructure control",
      "data/storage operations where supported",
      "authentication/integrations",
      "monitoring/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://ably.com/pricing",
      "source_1": "https://ably.com/docs/auth",
      "source_2": "https://ably.com/docs/protocols",
      "source_3": "https://ably.com/docs/sdks"
    }
  },
  {
    "name": "Airtable API",
    "category": "Dev Tools / Infra",
    "description": "Cataloged API provider.",
    "signup_url": "https://airtable.com/create/tokens",
    "pricing_url": "https://www.airtable.com/pricing",
    "documentation_url": "https://www.airtable.com/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Personal access tokens and OAuth 2.0",
    "protocols": [
      "REST"
    ],
    "sdk_languages": [
      "JavaScript",
      "Node.js"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": false,
    "webhooks": true,
    "rate_limit": "The API rate limit is 5 requests per second per base; exceeding it returns 429 and requires waiting.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "API/resource management",
      "deployment/infrastructure control",
      "data/storage operations where supported",
      "authentication/integrations",
      "monitoring/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.airtable.com/pricing",
      "source_1": "https://airtable.com/developers/web/api/authentication",
      "source_2": "https://airtable.com/developers/web/api/introduction",
      "source_3": "https://airtable.com/developers/web/api/client-libraries"
    }
  },
  {
    "name": "Algolia Search",
    "category": "Dev Tools / Infra",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.algolia.com/users/sign_up",
    "pricing_url": "https://www.algolia.com/pricing/",
    "documentation_url": "https://www.algolia.com/pricing/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "A credit card is not required for the Build plan trial; billing details are required to continue on a paid plan.",
    "authentication": "API keys (including application ID and search-only/admin API keys).",
    "protocols": [
      "HTTPS",
      "REST API"
    ],
    "sdk_languages": [
      "JavaScript",
      "PHP",
      "Python",
      "Ruby",
      ".NET",
      "Java",
      "Go",
      "Kotlin",
      "Swift",
      "C++"
    ],
    "commercial_use": "Permitted under Algolia's commercial terms and paid plans.",
    "self_hostable": "No; Algolia Search is a hosted service. Self-hosting is not published as an offering in the provider documentation.",
    "webhooks": "Unavailable",
    "rate_limit": "Rate limits depend on plan and API; Algolia documents limits in its API reference and usage plans.",
    "free_tier_reset": "Monthly (the free Build plan includes a monthly allowance).",
    "uses": [
      "API/resource management",
      "deployment/infrastructure control",
      "data/storage operations where supported",
      "authentication/integrations",
      "monitoring/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.algolia.com/pricing/",
      "source_1": "https://www.algolia.com/doc/guides/security/api-keys/",
      "source_2": "https://www.algolia.com/doc/rest-api/search/",
      "source_3": "https://www.algolia.com/developers/sdks/"
    }
  },
  {
    "name": "Auth0",
    "category": "Dev Tools / Infra",
    "description": "Cataloged API provider.",
    "signup_url": "https://auth0.com/signup",
    "pricing_url": "https://auth0.com/pricing",
    "documentation_url": "https://auth0.com/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No credit card is required to start a free Auth0 tenant.",
    "authentication": "OAuth 2.0, OpenID Connect, SAML, and API keys/tokens for Management API access.",
    "protocols": [
      "OAuth 2.0",
      "OpenID Connect",
      "SAML",
      "HTTPS/REST"
    ],
    "sdk_languages": [
      "JavaScript",
      "Node.js",
      "React",
      "Angular",
      "Java",
      ".NET",
      "Python",
      "PHP",
      "Ruby",
      "Go",
      "iOS",
      "Android"
    ],
    "commercial_use": "Permitted subject to Auth0 Terms of Service and applicable plan terms.",
    "self_hostable": "No; Auth0 is delivered as a cloud service. (Auth0 Private Cloud is an enterprise deployment option, not customer self-hosting.)",
    "webhooks": "Auth0 Actions can make outbound HTTP requests; a general inbound webhook feature is not published as a core API capability.",
    "rate_limit": "Management API rate limits are tenant-plan dependent; Auth0 documents a default 2 requests/second limit for many tenants and endpoint-specific limits.",
    "free_tier_reset": "Monthly; free tenants have monthly active user allowances under the Free plan.",
    "uses": [
      "API/resource management",
      "deployment/infrastructure control",
      "data/storage operations where supported",
      "authentication/integrations",
      "monitoring/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://auth0.com/pricing",
      "source_1": "https://auth0.com/docs/secure/tokens/access-tokens",
      "source_2": "https://auth0.com/docs/get-started/authentication-and-authorization-flow",
      "source_3": "https://auth0.com/docs/libraries"
    }
  },
  {
    "name": "AWS (free tier)",
    "category": "Dev Tools / Infra",
    "description": "Cataloged API provider.",
    "signup_url": "https://aws.amazon.com/free/",
    "pricing_url": "https://aws.amazon.com/free/",
    "documentation_url": "https://aws.amazon.com/premiumsupport/knowledge-center/what-is-free-tier/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Yes; AWS requires a valid payment method to create an account (with limited exceptions in some regions/programs).",
    "authentication": "AWS Signature Version 4 using access keys, or temporary credentials from IAM roles/ST​S; AWS also supports IAM Identity Center and SDK credential providers.",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON",
      "XML",
      "AWS Query"
    ],
    "sdk_languages": [
      "C++",
      "Go",
      "Java",
      ".NET",
      "JavaScript",
      "PHP",
      "Python",
      "Ruby",
      "Rust",
      "Kotlin",
      "Swift"
    ],
    "commercial_use": "Commercial use is permitted subject to the AWS Customer Agreement and service terms.",
    "self_hostable": "AWS services are hosted by AWS; AWS SDKs and APIs can be used from customer infrastructure, but the AWS services themselves are not self-hostable.",
    "webhooks": "Unavailable as a universal AWS API property; individual services document event destinations/webhooks separately.",
    "rate_limit": "Service-specific; AWS documents quotas and API throttling separately for each service.",
    "free_tier_reset": "Varies by service and offer; many offers are monthly, while some are time-limited or always-free.",
    "uses": [
      "API/resource management",
      "deployment/infrastructure control",
      "data/storage operations where supported",
      "authentication/integrations",
      "monitoring/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://aws.amazon.com/premiumsupport/knowledge-center/what-is-free-tier/",
      "source_1": "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_sigv.html",
      "source_2": "https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html",
      "source_3": "https://aws.amazon.com/developer/tools/"
    }
  },
  {
    "name": "Cloudflare API",
    "category": "Dev Tools / Infra",
    "description": "Cataloged API provider.",
    "signup_url": "https://dash.cloudflare.com/profile/api-tokens",
    "pricing_url": "https://www.cloudflare.com/plans/",
    "documentation_url": "https://www.cloudflare.com/plans/free/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No credit card is required for the Free plan; payment details are required for paid products or usage-based services.",
    "authentication": "API tokens (recommended) or the global API key with account email; Bearer token authentication is used for API tokens.",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [
      "Python",
      "Go",
      "JavaScript",
      ".NET",
      "Java",
      "PHP",
      "Ruby",
      "Terraform"
    ],
    "commercial_use": "Permitted subject to Cloudflare's Self-Serve Subscription Agreement and applicable product terms.",
    "self_hostable": "No; Cloudflare API controls Cloudflare-hosted services and is not a self-hostable Cloudflare service.",
    "webhooks": "Cloudflare supports notification webhooks for applicable products/events; availability is product-specific.",
    "rate_limit": "The Cloudflare API limit is 1,200 requests per five minutes per user (with endpoint-specific limits possible).",
    "free_tier_reset": "Unavailable as a single API-wide reset; Free-plan limits and quotas are product-specific.",
    "uses": [
      "API/resource management",
      "deployment/infrastructure control",
      "data/storage operations where supported",
      "authentication/integrations",
      "monitoring/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.cloudflare.com/plans/free/",
      "source_1": "https://developers.cloudflare.com/fundamentals/api/get-started/create-token/",
      "source_2": "https://developers.cloudflare.com/api/",
      "source_3": "https://developers.cloudflare.com/api/"
    }
  },
  {
    "name": "Firebase",
    "category": "Dev Tools / Infra",
    "description": "Cataloged API provider.",
    "signup_url": "https://console.firebase.google.com",
    "pricing_url": "https://firebase.google.com/pricing",
    "documentation_url": "https://firebase.google.com/docs/projects/billing/firebase-pricing-plans",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No credit card is required for the Spark (no-cost) plan; billing is required to use Blaze pay-as-you-go services.",
    "authentication": "Firebase Authentication, Firebase App Check, Google service-account credentials, and OAuth 2.0 access tokens for Admin/Google APIs.",
    "protocols": [
      "HTTPS",
      "REST",
      "gRPC"
    ],
    "sdk_languages": [
      "C++",
      "Java",
      "JavaScript",
      "Kotlin",
      "Objective-C",
      "Swift",
      "Dart",
      "Python",
      "Go",
      ".NET"
    ],
    "commercial_use": "Permitted subject to the Firebase Terms of Service and Google Cloud terms; quotas and product terms apply.",
    "self_hostable": "No; Firebase is a Google-hosted backend platform. Firebase open-source client SDKs do not make Firebase services self-hostable.",
    "webhooks": "Firebase Cloud Functions and event triggers support outbound HTTP/webhook-style integrations; availability is product-specific.",
    "rate_limit": "Quotas and limits are product-specific (for example, Cloud Firestore and Authentication document separate quotas).",
    "free_tier_reset": "Varies by product; Spark-plan quotas are generally daily or monthly according to the product quota documentation.",
    "uses": [
      "API/resource management",
      "deployment/infrastructure control",
      "data/storage operations where supported",
      "authentication/integrations",
      "monitoring/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://firebase.google.com/docs/projects/billing/firebase-pricing-plans",
      "source_1": "https://firebase.google.com/docs/admin/setup",
      "source_2": "https://firebase.google.com/docs/reference/rest",
      "source_3": "https://firebase.google.com/docs/libraries"
    }
  },
  {
    "name": "GitHub API",
    "category": "Dev Tools / Infra",
    "description": "Cataloged API provider.",
    "signup_url": "https://github.com/settings/tokens",
    "pricing_url": "https://github.com/pricing",
    "documentation_url": "https://docs.github.com/en/get-started/learning-about-github/githubs-plans",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Personal access tokens, OAuth apps, and GitHub Apps (Bearer token authentication)",
    "protocols": [
      "HTTPS REST",
      "GraphQL"
    ],
    "sdk_languages": [
      "Ruby",
      "JavaScript/TypeScript",
      "C#",
      "Java",
      "Go",
      "PHP",
      "Python",
      "Rust",
      "Swift",
      "Kotlin"
    ],
    "commercial_use": "Permitted subject to GitHub terms and applicable API policies",
    "self_hostable": "Unavailable for the GitHub.com API; GitHub Enterprise Server provides an on-premises GitHub product/API",
    "webhooks": "Supported",
    "rate_limit": "REST API unauthenticated: 60 requests/hour; authenticated user: 5,000 requests/hour (higher limits apply to GitHub App installations and Enterprise Cloud)",
    "free_tier_reset": "Unavailable",
    "uses": [
      "API/resource management",
      "deployment/infrastructure control",
      "data/storage operations where supported",
      "authentication/integrations",
      "monitoring/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://docs.github.com/en/get-started/learning-about-github/githubs-plans",
      "source_1": "https://docs.github.com/en/rest/authentication/authenticating-to-the-rest-api",
      "source_2": "https://docs.github.com/en/rest/using-the-rest-api/about-the-rest-api",
      "source_3": "https://github.com/github/rest-api-description"
    }
  },
  {
    "name": "GitLab API",
    "category": "Dev Tools / Infra",
    "description": "Cataloged API provider.",
    "signup_url": "https://gitlab.com/-/profile/personal_access_tokens",
    "pricing_url": "https://about.gitlab.com/pricing/",
    "documentation_url": "https://about.gitlab.com/pricing/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "OAuth 2.0, personal/project/group access tokens, and deploy tokens",
    "protocols": [
      "HTTPS REST",
      "GraphQL"
    ],
    "sdk_languages": [
      "Ruby",
      "Go",
      "Python",
      "JavaScript",
      "Java"
    ],
    "commercial_use": "Permitted under GitLab's applicable terms and license",
    "self_hostable": "Yes; GitLab Self-Managed",
    "webhooks": "Supported",
    "rate_limit": "GitLab.com REST API rate limits are 600 requests per minute per user; additional endpoint-specific limits may apply",
    "free_tier_reset": "Unavailable",
    "uses": [
      "API/resource management",
      "deployment/infrastructure control",
      "data/storage operations where supported",
      "authentication/integrations",
      "monitoring/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://about.gitlab.com/pricing/",
      "source_1": "https://docs.gitlab.com/api/rest/auth/",
      "source_2": "https://docs.gitlab.com/api/",
      "source_3": "https://docs.gitlab.com/api/client_libraries/"
    }
  },
  {
    "name": "Netlify API",
    "category": "Dev Tools / Infra",
    "description": "Cataloged API provider.",
    "signup_url": "https://app.netlify.com/user/applications",
    "pricing_url": "https://www.netlify.com/pricing/",
    "documentation_url": "https://www.netlify.com/pricing/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Personal access tokens and OAuth 2.0",
    "protocols": [
      "HTTPS REST"
    ],
    "sdk_languages": [
      "JavaScript/TypeScript"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "No; Netlify is a hosted platform",
    "webhooks": "Supported",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "API/resource management",
      "deployment/infrastructure control",
      "data/storage operations where supported",
      "authentication/integrations",
      "monitoring/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.netlify.com/pricing/",
      "source_1": "https://docs.netlify.com/api/get-started/#authentication",
      "source_2": "https://open-api.netlify.com/",
      "source_3": "https://github.com/netlify/js-client"
    }
  },
  {
    "name": "Notion API",
    "category": "Dev Tools / Infra",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.notion.so/my-integrations",
    "pricing_url": "https://www.notion.com/pricing",
    "documentation_url": "https://www.notion.com/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Bearer token (internal integration token or OAuth 2.0)",
    "protocols": [
      "HTTPS REST"
    ],
    "sdk_languages": [
      "JavaScript/TypeScript",
      "Python"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "No; hosted Notion API",
    "webhooks": "Supported",
    "rate_limit": "Average of 3 requests per second per integration, with some variation",
    "free_tier_reset": "Unavailable",
    "uses": [
      "API/resource management",
      "deployment/infrastructure control",
      "data/storage operations where supported",
      "authentication/integrations",
      "monitoring/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.notion.com/pricing",
      "source_1": "https://developers.notion.com/reference/authentication",
      "source_2": "https://developers.notion.com/reference/intro",
      "source_3": "https://developers.notion.com/page/libraries"
    }
  },
  {
    "name": "PostHog",
    "category": "Dev Tools / Infra",
    "description": "Cataloged API provider.",
    "signup_url": "https://app.posthog.com/signup",
    "pricing_url": "https://posthog.com/pricing",
    "documentation_url": "https://posthog.com/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the free tier (official pricing presents a free usage tier)",
    "authentication": "Project API key for ingestion; personal/API keys for management APIs",
    "protocols": [
      "HTTPS REST",
      "JavaScript SDK/event ingestion"
    ],
    "sdk_languages": [
      "JavaScript",
      "React",
      "React Native",
      "Node.js",
      "Python",
      "Ruby",
      "PHP",
      "Go",
      "iOS",
      "Android",
      "Flutter",
      "Unity"
    ],
    "commercial_use": "Permitted under PostHog's applicable terms",
    "self_hostable": "Yes; PostHog provides a self-hosted deployment",
    "webhooks": "Supported (webhooks destination)",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Monthly",
    "uses": [
      "API/resource management",
      "deployment/infrastructure control",
      "data/storage operations where supported",
      "authentication/integrations",
      "monitoring/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://posthog.com/pricing",
      "source_1": "https://posthog.com/docs/api/overview",
      "source_2": "https://posthog.com/docs/api",
      "source_3": "https://posthog.com/docs/libraries"
    }
  },
  {
    "name": "Pusher",
    "category": "Dev Tools / Infra",
    "description": "Cataloged API provider.",
    "signup_url": "https://dashboard.pusher.com/accounts/sign_up",
    "pricing_url": "https://pusher.com/channels/pricing/",
    "documentation_url": "https://pusher.com/channels/pricing/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the Sandbox plan (provider says no credit card required)",
    "authentication": "App key for client connection; server API requests use app_id, key and secret (HTTP API authentication)",
    "protocols": [
      "WebSocket",
      "HTTP/REST"
    ],
    "sdk_languages": [
      "JavaScript",
      "Node.js",
      "Ruby",
      "PHP",
      "Python",
      "Java",
      ".NET",
      "Go"
    ],
    "commercial_use": "Permitted under Pusher terms (paid service plans are offered for production use)",
    "self_hostable": "No; Pusher Channels is a hosted service",
    "webhooks": "Supported; channel events can be delivered to configured webhook endpoints",
    "rate_limit": "Published limits vary by plan and API operation; Pusher documents a 10 requests/second limit for some REST API operations",
    "free_tier_reset": "Monthly quota (Sandbox plan)",
    "uses": [
      "API/resource management",
      "deployment/infrastructure control",
      "data/storage operations where supported",
      "authentication/integrations",
      "monitoring/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://pusher.com/channels/pricing/",
      "source_1": "https://pusher.com/docs/channels/library_auth_reference/rest-api/",
      "source_2": "https://pusher.com/docs/channels/using_channels/connection/",
      "source_3": "https://pusher.com/docs/channels/channels_libraries/libraries/"
    }
  },
  {
    "name": "Sentry",
    "category": "Dev Tools / Infra",
    "description": "Cataloged API provider.",
    "signup_url": "https://sentry.io/signup/",
    "pricing_url": "https://sentry.io/pricing/",
    "documentation_url": "https://sentry.io/pricing/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the Developer plan; card is required when upgrading to paid plans",
    "authentication": "API authentication uses an auth token (Bearer token); DSN is used by SDKs to submit events",
    "protocols": [
      "HTTPS/REST"
    ],
    "sdk_languages": [
      "JavaScript",
      "Python",
      "Ruby",
      "PHP",
      "Java",
      "C#",
      "Go",
      "Rust",
      "C/C++",
      "Dart",
      "Elixir",
      "Kotlin",
      "Swift"
    ],
    "commercial_use": "Permitted subject to Sentry terms; commercial plans are published",
    "self_hostable": "Yes; Sentry publishes a self-hosted installation option",
    "webhooks": "Supported through Sentry integrations/webhooks",
    "rate_limit": "API rate limits are published in the API response rate-limit headers and documented by Sentry",
    "free_tier_reset": "Monthly quota reset",
    "uses": [
      "API/resource management",
      "deployment/infrastructure control",
      "data/storage operations where supported",
      "authentication/integrations",
      "monitoring/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://sentry.io/pricing/",
      "source_1": "https://docs.sentry.io/api/auth/",
      "source_2": "https://docs.sentry.io/api/",
      "source_3": "https://docs.sentry.io/platforms/"
    }
  },
  {
    "name": "Stripe (test keys)",
    "category": "Dev Tools / Infra",
    "description": "Cataloged API provider.",
    "signup_url": "https://dashboard.stripe.com/register",
    "pricing_url": "https://stripe.com/pricing",
    "documentation_url": "https://docs.stripe.com/keys",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No; test mode is available without making live charges",
    "authentication": "Secret and publishable API keys; test keys are prefixed sk_test_ and pk_test_",
    "protocols": [
      "HTTPS/REST"
    ],
    "sdk_languages": [
      "Ruby",
      "PHP",
      "Java",
      "Python",
      "Node.js",
      ".NET",
      "Go"
    ],
    "commercial_use": "Permitted subject to Stripe Services Agreement and applicable product terms",
    "self_hostable": "No; Stripe API is a hosted service",
    "webhooks": "Supported; Stripe sends event notifications to HTTPS webhook endpoints",
    "rate_limit": "Stripe API rate limit is 100 operations per second in live mode and 25 operations per second in test mode",
    "free_tier_reset": "Unavailable",
    "uses": [
      "API/resource management",
      "deployment/infrastructure control",
      "data/storage operations where supported",
      "authentication/integrations",
      "monitoring/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://docs.stripe.com/keys",
      "source_1": "https://docs.stripe.com/keys",
      "source_2": "https://docs.stripe.com/api",
      "source_3": "https://docs.stripe.com/sdks"
    }
  },
  {
    "name": "Supabase",
    "category": "Dev Tools / Infra",
    "description": "Cataloged API provider.",
    "signup_url": "https://supabase.com/dashboard",
    "pricing_url": "https://supabase.com/pricing",
    "documentation_url": "https://supabase.com/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the Free plan",
    "authentication": "API keys (publishable/anon and secret/service_role) are supplied in request headers; user auth uses JWT",
    "protocols": [
      "HTTPS/REST",
      "WebSocket"
    ],
    "sdk_languages": [
      "JavaScript/TypeScript",
      "Dart",
      "Flutter",
      "Python",
      "C#",
      "Swift",
      "Kotlin"
    ],
    "commercial_use": "Permitted subject to Supabase Terms of Service",
    "self_hostable": "Yes; Supabase provides self-hosting documentation",
    "webhooks": "Supported through Database Webhooks",
    "rate_limit": "Published limits depend on product/resource and plan; Supabase documents API rate limits",
    "free_tier_reset": "Monthly billing-cycle quota reset",
    "uses": [
      "API/resource management",
      "deployment/infrastructure control",
      "data/storage operations where supported",
      "authentication/integrations",
      "monitoring/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://supabase.com/pricing",
      "source_1": "https://supabase.com/docs/guides/api/api-keys",
      "source_2": "https://supabase.com/docs/guides/api",
      "source_3": "https://supabase.com/docs/reference"
    }
  },
  {
    "name": "Vercel API",
    "category": "Dev Tools / Infra",
    "description": "Cataloged API provider.",
    "signup_url": "https://vercel.com/account/tokens",
    "pricing_url": "https://vercel.com/pricing",
    "documentation_url": "https://vercel.com/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the Hobby plan; payment details are required for paid plans",
    "authentication": "Bearer token in the Authorization header; tokens are created in account settings",
    "protocols": [
      "HTTPS/REST"
    ],
    "sdk_languages": [
      "JavaScript/TypeScript (Vercel SDK)"
    ],
    "commercial_use": "Permitted subject to Vercel Terms of Service and plan restrictions",
    "self_hostable": "No; Vercel API is a hosted service",
    "webhooks": "Supported through Vercel webhooks/integrations",
    "rate_limit": "Rate limits are published in the Vercel API documentation and returned in response headers",
    "free_tier_reset": "Unavailable",
    "uses": [
      "API/resource management",
      "deployment/infrastructure control",
      "data/storage operations where supported",
      "authentication/integrations",
      "monitoring/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://vercel.com/pricing",
      "source_1": "https://vercel.com/docs/rest-api#authentication",
      "source_2": "https://vercel.com/docs/rest-api",
      "source_3": "https://vercel.com/docs/rest-api/sdk"
    }
  },
  {
    "name": "Bitly API",
    "category": "Dev Tools / Infra (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://bitly.com",
    "pricing_url": "https://bitly.com/pages/pricing",
    "documentation_url": "https://bitly.com/pages/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "OAuth 2.0 bearer tokens and personal access tokens",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [
      "PHP",
      "Python",
      "Ruby",
      "JavaScript"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": false,
    "webhooks": "Webhooks are supported through Bitly webhooks endpoints",
    "rate_limit": "1,000 requests per hour per user",
    "free_tier_reset": "Unavailable",
    "uses": [
      "API/resource management",
      "deployment/infrastructure control",
      "data/storage operations where supported",
      "authentication/integrations",
      "monitoring/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://bitly.com/pages/pricing",
      "source_1": "https://dev.bitly.com/docs/getting-started/authentication/",
      "source_2": "https://dev.bitly.com/api-reference/",
      "source_3": "https://dev.bitly.com/docs/getting-started/libraries/"
    }
  },
  {
    "name": "Contentful",
    "category": "Dev Tools / Infra (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.contentful.com",
    "pricing_url": "https://www.contentful.com/pricing/",
    "documentation_url": "https://www.contentful.com/pricing/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the Free plan",
    "authentication": "API keys/tokens via Authorization bearer token; OAuth 2.0 for applications",
    "protocols": [
      "HTTPS",
      "REST",
      "GraphQL",
      "JSON"
    ],
    "sdk_languages": [
      "JavaScript",
      "Java",
      "PHP",
      "Python",
      ".NET",
      "Ruby",
      "Swift",
      "Kotlin"
    ],
    "commercial_use": "Yes, subject to plan terms",
    "self_hostable": false,
    "webhooks": "Supported",
    "rate_limit": "Content Management API: 10 requests per second per space; Content Delivery API: 78 requests per second per space",
    "free_tier_reset": "Unavailable",
    "uses": [
      "API/resource management",
      "deployment/infrastructure control",
      "data/storage operations where supported",
      "authentication/integrations",
      "monitoring/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.contentful.com/pricing/",
      "source_1": "https://www.contentful.com/developers/docs/references/authentication/",
      "source_2": "https://www.contentful.com/developers/docs/references/",
      "source_3": "https://www.contentful.com/developers/docs/references/sdks/"
    }
  },
  {
    "name": "DigitalOcean API",
    "category": "Dev Tools / Infra (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://cloud.digitalocean.com/account/api/tokens",
    "pricing_url": "https://www.digitalocean.com/pricing/",
    "documentation_url": "https://www.digitalocean.com/try/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Yes to create an account/use paid resources; promotional trial terms may vary",
    "authentication": "OAuth 2.0 and personal access tokens using Bearer authentication",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [
      "Go",
      "Python",
      "Ruby",
      "PHP",
      "JavaScript"
    ],
    "commercial_use": "Yes, subject to DigitalOcean terms",
    "self_hostable": false,
    "webhooks": "Unavailable",
    "rate_limit": "5,000 requests per hour",
    "free_tier_reset": "Unavailable",
    "uses": [
      "API/resource management",
      "deployment/infrastructure control",
      "data/storage operations where supported",
      "authentication/integrations",
      "monitoring/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.digitalocean.com/try/",
      "source_1": "https://docs.digitalocean.com/reference/api/api-reference/#authentication",
      "source_2": "https://docs.digitalocean.com/reference/api/",
      "source_3": "https://docs.digitalocean.com/reference/api/libraries/"
    }
  },
  {
    "name": "Fauna",
    "category": "Dev Tools / Infra (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://fauna.com",
    "pricing_url": "https://fauna.com/pricing",
    "documentation_url": "https://fauna.com/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Secret keys sent in the Authorization header as Bearer tokens",
    "protocols": [
      "HTTPS",
      "HTTP",
      "JSON"
    ],
    "sdk_languages": [
      "JavaScript",
      "TypeScript",
      "Java",
      "Go",
      "Python",
      "Ruby",
      "C#"
    ],
    "commercial_use": "Yes, subject to terms",
    "self_hostable": false,
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "API/resource management",
      "deployment/infrastructure control",
      "data/storage operations where supported",
      "authentication/integrations",
      "monitoring/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://fauna.com/pricing",
      "source_1": "https://docs.fauna.com/fauna/current/reference/http/",
      "source_2": "https://docs.fauna.com/fauna/current/reference/http/",
      "source_3": "https://docs.fauna.com/fauna/current/drivers/"
    }
  },
  {
    "name": "Heroku Platform API",
    "category": "Dev Tools / Infra (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://devcenter.heroku.com/articles/platform-api-reference",
    "pricing_url": "https://www.heroku.com/pricing",
    "documentation_url": "https://www.heroku.com/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for a Heroku account; payment method may be required for paid resources",
    "authentication": "OAuth 2.0 or API tokens via Authorization header",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [
      "Ruby",
      "Node.js",
      "Python",
      "Java",
      "Go"
    ],
    "commercial_use": "Yes, subject to Heroku terms",
    "self_hostable": false,
    "webhooks": "Unavailable",
    "rate_limit": "4,500 requests per hour per account",
    "free_tier_reset": "Unavailable",
    "uses": [
      "API/resource management",
      "deployment/infrastructure control",
      "data/storage operations where supported",
      "authentication/integrations",
      "monitoring/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.heroku.com/pricing",
      "source_1": "https://devcenter.heroku.com/articles/platform-api-reference#authentication",
      "source_2": "https://devcenter.heroku.com/articles/platform-api-reference",
      "source_3": "https://devcenter.heroku.com/articles/platform-api-reference#libraries"
    }
  },
  {
    "name": "Linode API",
    "category": "Dev Tools / Infra (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://cloud.linode.com/profile/tokens",
    "pricing_url": "https://www.linode.com/pricing/",
    "documentation_url": "https://www.linode.com/docs/products/tools/cloud-manager/guides/free-credit/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Yes for creating a paid Cloud Manager account; trial eligibility and payment requirements are described by Linode",
    "authentication": [
      "Personal access tokens",
      "OAuth 2.0"
    ],
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [
      "Go",
      "Python",
      "Ruby",
      "PHP",
      "JavaScript/TypeScript"
    ],
    "commercial_use": "Permitted subject to Akamai/Linode terms of service",
    "self_hostable": "No; Linode API manages Akamai cloud resources and is not offered as self-hosted software",
    "webhooks": "Unavailable",
    "rate_limit": "800 requests per minute per account; API returns HTTP 429 when exceeded",
    "free_tier_reset": "Unavailable",
    "uses": [
      "API/resource management",
      "deployment/infrastructure control",
      "data/storage operations where supported",
      "authentication/integrations",
      "monitoring/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.linode.com/docs/products/tools/cloud-manager/guides/free-credit/",
      "source_1": "https://www.linode.com/docs/products/tools/cloud-management-api/#section_authentication",
      "source_2": "https://www.linode.com/docs/products/tools/cloud-management-api/",
      "source_3": "https://www.linode.com/docs/products/tools/cloud-management-api/"
    }
  },
  {
    "name": "MongoDB Atlas",
    "category": "Dev Tools / Infra (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.mongodb.com/cloud/atlas",
    "pricing_url": "https://www.mongodb.com/pricing/",
    "documentation_url": "https://www.mongodb.com/docs/atlas/billing/paying-for-atlas/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the Free cluster; a payment method is required when upgrading to a paid service",
    "authentication": [
      "Programmatic API keys (public/private key pair)",
      "OAuth 2.0"
    ],
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [
      "Unavailable"
    ],
    "commercial_use": "Permitted subject to MongoDB Atlas terms",
    "self_hostable": "No; Atlas is MongoDB's managed cloud service",
    "webhooks": "Atlas App Services webhooks are available, but Atlas Administration API webhooks are not documented as a general API feature",
    "rate_limit": "100 requests per minute per IP address for the Atlas Administration API",
    "free_tier_reset": "Free cluster limits do not reset on a recurring API quota schedule; Atlas Free cluster is a continuously available tier subject to its limits",
    "uses": [
      "API/resource management",
      "deployment/infrastructure control",
      "data/storage operations where supported",
      "authentication/integrations",
      "monitoring/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.mongodb.com/docs/atlas/billing/paying-for-atlas/",
      "source_1": "https://www.mongodb.com/docs/atlas/api/apiKeyManagement/",
      "source_2": "https://www.mongodb.com/docs/atlas/reference/api-resources-spec/v2/",
      "source_3": "https://www.mongodb.com/docs/atlas/api/"
    }
  },
  {
    "name": "Neon (Postgres)",
    "category": "Dev Tools / Infra (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://neon.tech",
    "pricing_url": "https://neon.tech/pricing",
    "documentation_url": "https://neon.tech/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the Free plan",
    "authentication": [
      "API key",
      "Neon CLI/API credentials"
    ],
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [
      "JavaScript/TypeScript",
      "Python",
      "Go",
      "Ruby",
      "Rust"
    ],
    "commercial_use": "Permitted under Neon Terms of Service",
    "self_hostable": "No; Neon Cloud is a hosted service (the Neon server is open source, but Neon API is not a self-hosted offering)",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "API/resource management",
      "deployment/infrastructure control",
      "data/storage operations where supported",
      "authentication/integrations",
      "monitoring/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://neon.tech/pricing",
      "source_1": "https://neon.tech/docs/manage/api-keys",
      "source_2": "https://neon.tech/docs/reference/api-reference",
      "source_3": "https://neon.tech/docs/reference/neon-sdk"
    }
  },
  {
    "name": "PlanetScale",
    "category": "Dev Tools / Infra (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://planetscale.com",
    "pricing_url": "https://planetscale.com/pricing",
    "documentation_url": "https://planetscale.com/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": [
      "Service tokens",
      "OAuth applications"
    ],
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [
      "Unavailable"
    ],
    "commercial_use": "Permitted subject to PlanetScale terms",
    "self_hostable": "No; PlanetScale is a managed database platform",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "API/resource management",
      "deployment/infrastructure control",
      "data/storage operations where supported",
      "authentication/integrations",
      "monitoring/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://planetscale.com/pricing",
      "source_1": "https://planetscale.com/docs/api/reference/authentication",
      "source_2": "https://planetscale.com/docs/api/reference",
      "source_3": "https://planetscale.com/docs/api/reference"
    }
  },
  {
    "name": "Postman API Platform",
    "category": "Dev Tools / Infra (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.postman.com",
    "pricing_url": "https://www.postman.com/pricing/",
    "documentation_url": "https://www.postman.com/pricing/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the Free plan",
    "authentication": [
      "Postman API key (X-Api-Key header)",
      "OAuth 2.0 (where supported)"
    ],
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [
      "Unavailable"
    ],
    "commercial_use": "Permitted subject to Postman Terms of Service and plan terms",
    "self_hostable": "No for Postman cloud API; Postman Enterprise additionally documents on-premises/private deployment options for the platform",
    "webhooks": "Postman webhooks are supported for collections",
    "rate_limit": "The Postman Public API has plan-dependent request limits; the official API documentation directs users to the rate-limit response headers and plan limits",
    "free_tier_reset": "Unavailable",
    "uses": [
      "API/resource management",
      "deployment/infrastructure control",
      "data/storage operations where supported",
      "authentication/integrations",
      "monitoring/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.postman.com/pricing/",
      "source_1": "https://learning.postman.com/docs/developer/postman-api/authentication/",
      "source_2": "https://learning.postman.com/docs/developer/postman-api/intro-api/",
      "source_3": "https://learning.postman.com/docs/developer/postman-api/intro-api/"
    }
  },
  {
    "name": "Railway",
    "category": "Dev Tools / Infra (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://railway.app",
    "pricing_url": "https://railway.com/pricing",
    "documentation_url": "https://docs.railway.com/reference/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Railway account authentication; API access uses project/account tokens",
    "protocols": [
      "HTTP and TCP networking for deployed services; deployments can use Docker/OCI images"
    ],
    "sdk_languages": [
      "Unavailable"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "No; Railway is documented as a hosted platform",
    "webhooks": "Project webhooks are documented",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "API/resource management",
      "deployment/infrastructure control",
      "data/storage operations where supported",
      "authentication/integrations",
      "monitoring/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://docs.railway.com/reference/pricing",
      "source_1": "https://docs.railway.com/reference/public-api",
      "source_2": "https://docs.railway.com/guides/public-networking",
      "source_3": "https://docs.railway.com/reference/public-api"
    }
  },
  {
    "name": "RapidAPI Marketplace",
    "category": "Dev Tools / Infra (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://rapidapi.com",
    "pricing_url": "https://rapidapi.com/pricing",
    "documentation_url": "https://docs.rapidapi.com/docs/keys",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "RapidAPI applications authenticate requests with the X-RapidAPI-Key and X-RapidAPI-Host headers",
    "protocols": [
      "HTTP/HTTPS APIs"
    ],
    "sdk_languages": [
      "RapidAPI provides code snippets/generated examples for multiple languages; the exact set varies by API"
    ],
    "commercial_use": "Depends on the individual API provider and subscription terms; no marketplace-wide blanket permission documented",
    "self_hostable": "No; RapidAPI Marketplace is a hosted marketplace",
    "webhooks": "Unavailable",
    "rate_limit": "Set by the API provider and subscription plan; shown in the API's marketplace listing",
    "free_tier_reset": "Unavailable",
    "uses": [
      "API/resource management",
      "deployment/infrastructure control",
      "data/storage operations where supported",
      "authentication/integrations",
      "monitoring/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://docs.rapidapi.com/docs/keys",
      "source_1": "https://docs.rapidapi.com/docs/keys",
      "source_2": "https://docs.rapidapi.com/docs/using-rapidapi",
      "source_3": "https://docs.rapidapi.com/docs/using-rapidapi"
    }
  },
  {
    "name": "Redis Cloud",
    "category": "Dev Tools / Infra (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://redis.com/try-free/",
    "pricing_url": "https://redis.io/pricing/",
    "documentation_url": "https://redis.io/docs/latest/operate/rc/rc-quickstart/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Redis Cloud databases use a username and password; connections can use TLS",
    "protocols": [
      "Redis protocol (RESP); Redis Cloud supports connections from Redis clients over TLS"
    ],
    "sdk_languages": [
      "Redis officially documents client libraries for multiple languages including Python, Node.js, Java, Go, .NET, PHP, and Ruby"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "No for Redis Cloud; Redis software itself is separately available to run self-managed",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "The Redis Cloud free subscription is documented as a persistent free database with plan limits; a periodic reset is not documented",
    "uses": [
      "API/resource management",
      "deployment/infrastructure control",
      "data/storage operations where supported",
      "authentication/integrations",
      "monitoring/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://redis.io/docs/latest/operate/rc/rc-quickstart/",
      "source_1": "https://redis.io/docs/latest/operate/rc/security/database-security/",
      "source_2": "https://redis.io/docs/latest/operate/rc/connect/",
      "source_3": "https://redis.io/resources/clients/"
    }
  },
  {
    "name": "Render",
    "category": "Dev Tools / Infra (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://render.com",
    "pricing_url": "https://render.com/pricing",
    "documentation_url": "https://render.com/docs/billing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Render API uses API keys; OAuth is available for integrations",
    "protocols": [
      "HTTP/HTTPS, WebSockets, and private network TCP connections as supported by the service type"
    ],
    "sdk_languages": [
      "Unavailable"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "No; Render is a hosted cloud platform",
    "webhooks": "Deploy hooks and webhook-based deploy integrations are documented",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "API/resource management",
      "deployment/infrastructure control",
      "data/storage operations where supported",
      "authentication/integrations",
      "monitoring/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://render.com/docs/billing",
      "source_1": "https://api-docs.render.com",
      "source_2": "https://render.com/docs/web-services",
      "source_3": "https://api-docs.render.com"
    }
  },
  {
    "name": "Sanity.io",
    "category": "Dev Tools / Infra (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.sanity.io",
    "pricing_url": "https://www.sanity.io/pricing",
    "documentation_url": "https://www.sanity.io/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the free plan",
    "authentication": "API tokens (Bearer tokens); project ID and dataset identify the target",
    "protocols": [
      "HTTP APIs",
      "GROQ query API",
      "GraphQL API"
    ],
    "sdk_languages": [
      "JavaScript/TypeScript",
      "PHP",
      "Ruby",
      ".NET"
    ],
    "commercial_use": "Yes; Sanity’s pricing page offers paid commercial plans",
    "self_hostable": "No (Sanity is a hosted Content Operating System; the open-source Studio is deployable separately)",
    "webhooks": true,
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "API/resource management",
      "deployment/infrastructure control",
      "data/storage operations where supported",
      "authentication/integrations",
      "monitoring/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.sanity.io/pricing",
      "source_1": "https://www.sanity.io/docs/content-lake/authentication",
      "source_2": "https://www.sanity.io/docs/http-reference",
      "source_3": "https://www.sanity.io/docs/client-libraries"
    }
  },
  {
    "name": "Strapi Cloud",
    "category": "Dev Tools / Infra (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://strapi.io",
    "pricing_url": "https://strapi.io/pricing",
    "documentation_url": "https://strapi.io/cloud",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Strapi API tokens and Users & Permissions JWT authentication",
    "protocols": [
      "REST",
      "GraphQL (via the official GraphQL plugin)"
    ],
    "sdk_languages": [
      "Unavailable"
    ],
    "commercial_use": "Yes; Strapi documents commercial use under its license/enterprise offerings",
    "self_hostable": true,
    "webhooks": true,
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "API/resource management",
      "deployment/infrastructure control",
      "data/storage operations where supported",
      "authentication/integrations",
      "monitoring/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://strapi.io/cloud",
      "source_1": "https://docs.strapi.io/cms/features/API-tokens",
      "source_2": "https://docs.strapi.io/cms/api/rest; https://docs.strapi.io/cms/api/graphql",
      "source_3": "https://docs.strapi.io/cms/"
    }
  },
  {
    "name": "TinyURL API",
    "category": "Dev Tools / Infra (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://tinyurl.com/app",
    "pricing_url": "https://tinyurl.com/app/dev",
    "documentation_url": "https://tinyurl.com/app/dev",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key",
    "protocols": [
      "HTTPS REST API"
    ],
    "sdk_languages": [
      "Unavailable"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": false,
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "API/resource management",
      "deployment/infrastructure control",
      "data/storage operations where supported",
      "authentication/integrations",
      "monitoring/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://tinyurl.com/app/dev",
      "source_1": "https://tinyurl.com/app/dev",
      "source_2": "https://tinyurl.com/app/dev",
      "source_3": "https://tinyurl.com/app/dev"
    }
  },
  {
    "name": "Upstash",
    "category": "Dev Tools / Infra (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://upstash.com",
    "pricing_url": "https://upstash.com/pricing",
    "documentation_url": "https://upstash.com/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the free tier",
    "authentication": "REST endpoint URL plus Bearer token (or SDK credentials)",
    "protocols": [
      "HTTPS REST",
      "Redis protocol"
    ],
    "sdk_languages": [
      "JavaScript/TypeScript",
      "Python",
      "Go",
      "Rust",
      "Java",
      ".NET",
      "PHP"
    ],
    "commercial_use": "Yes; paid plans are offered for production use",
    "self_hostable": false,
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "API/resource management",
      "deployment/infrastructure control",
      "data/storage operations where supported",
      "authentication/integrations",
      "monitoring/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://upstash.com/pricing",
      "source_1": "https://upstash.com/docs/redis/features/restapi",
      "source_2": "https://upstash.com/docs/redis/features/restapi",
      "source_3": "https://upstash.com/docs/redis/sdks"
    }
  },
  {
    "name": "Amazon Product Advertising API",
    "category": "E-commerce / Shopping",
    "description": "Cataloged API provider.",
    "signup_url": "https://webservices.amazon.com/paapi5/documentation/",
    "pricing_url": "https://affiliate-program.amazon.com/help/node/topic/GQ6JH4K8C3C7N5ZK",
    "documentation_url": "https://webservices.amazon.com/paapi5/documentation/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "AWS Signature Version 4 using an Access Key ID, Secret Access Key, and Associate Tag",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [
      "Java",
      "PHP",
      "Python",
      "Node.js"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "The default request rate is 1 request per second; the initial limit is tied to qualifying Associates revenue and may increase with shipped-item revenue.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "product/catalog data",
      "orders",
      "customers",
      "inventory",
      "payments/checkout",
      "store management"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://webservices.amazon.com/paapi5/documentation/",
      "source_1": "https://webservices.amazon.com/paapi5/documentation/quick-start/using-sdk.html",
      "source_2": "https://webservices.amazon.com/paapi5/documentation/",
      "source_3": "https://webservices.amazon.com/paapi5/documentation/quick-start/using-sdk.html"
    }
  },
  {
    "name": "BigCommerce API",
    "category": "E-commerce / Shopping",
    "description": "Cataloged API provider.",
    "signup_url": "https://developer.bigcommerce.com",
    "pricing_url": "https://www.bigcommerce.com/essentials/pricing/",
    "documentation_url": "https://developer.bigcommerce.com/docs/start/authentication/api-accounts",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "OAuth 2.0 for apps; API accounts use access tokens (with the token sent in X-Auth-Token).",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON",
      "GraphQL"
    ],
    "sdk_languages": [
      "Node.js",
      "PHP",
      "Python",
      "Ruby"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Supported",
    "rate_limit": "API rate limits are quota-based and vary by plan; the standard limit is 20,000 requests per hour, with an additional burst limit of 150 requests per 30 seconds.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "product/catalog data",
      "orders",
      "customers",
      "inventory",
      "payments/checkout",
      "store management"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://developer.bigcommerce.com/docs/start/authentication/api-accounts",
      "source_1": "https://developer.bigcommerce.com/docs/start/authentication",
      "source_2": "https://developer.bigcommerce.com/docs/storefront/graphql",
      "source_3": "https://developer.bigcommerce.com/docs/start/about"
    }
  },
  {
    "name": "eBay API",
    "category": "E-commerce / Shopping",
    "description": "Cataloged API provider.",
    "signup_url": "https://developer.ebay.com",
    "pricing_url": "https://developer.ebay.com/develop/get-started/api-call-limits",
    "documentation_url": "https://developer.ebay.com/signin",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "OAuth 2.0 (application and user access tokens); legacy APIs may use application credentials.",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [
      "Java",
      "C#",
      "JavaScript",
      "PHP",
      "Python"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Supported through eBay notifications/subscriptions APIs",
    "rate_limit": "Limits are assigned per application and API; the Call Limit dashboard documents the daily call limits and usage.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "product/catalog data",
      "orders",
      "customers",
      "inventory",
      "payments/checkout",
      "store management"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://developer.ebay.com/signin",
      "source_1": "https://developer.ebay.com/api-docs/static/oauth-authorization.html",
      "source_2": "https://developer.ebay.com/api-docs/static/overview.html",
      "source_3": "https://developer.ebay.com/develop/sdks"
    }
  },
  {
    "name": "Etsy API",
    "category": "E-commerce / Shopping",
    "description": "Cataloged API provider.",
    "signup_url": "https://developers.etsy.com",
    "pricing_url": "https://www.etsy.com/legal/api/",
    "documentation_url": "https://developers.etsy.com/documentation/essentials/authentication/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "OAuth 2.0 with PKCE; requests use a bearer access token and x-api-key header.",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [
      "Unavailable"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Supported",
    "rate_limit": "The API allows 10,000 requests per day per application; response headers provide the remaining quota.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "product/catalog data",
      "orders",
      "customers",
      "inventory",
      "payments/checkout",
      "store management"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://developers.etsy.com/documentation/essentials/authentication/",
      "source_1": "https://developers.etsy.com/documentation/essentials/authentication/",
      "source_2": "https://developers.etsy.com/documentation/",
      "source_3": "https://developers.etsy.com/documentation/"
    }
  },
  {
    "name": "PayPal API",
    "category": "E-commerce / Shopping",
    "description": "Cataloged API provider.",
    "signup_url": "https://developer.paypal.com",
    "pricing_url": "https://www.paypal.com/us/business/pricing",
    "documentation_url": "https://developer.paypal.com/api/rest/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": [
      "OAuth 2.0 client-credentials access tokens",
      "API credentials (client ID and secret)"
    ],
    "protocols": [
      "REST",
      "JSON",
      "HTTPS"
    ],
    "sdk_languages": [
      "Java",
      ".NET",
      "Node.js",
      "PHP",
      "Python",
      "Ruby"
    ],
    "commercial_use": true,
    "self_hostable": false,
    "webhooks": true,
    "rate_limit": "PayPal documents API request rate limits by API/resource; consult the rate-limit guidance for the applicable API. A single universal limit is not published.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "product/catalog data",
      "orders",
      "customers",
      "inventory",
      "payments/checkout",
      "store management"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://developer.paypal.com/api/rest/",
      "source_1": "https://developer.paypal.com/api/rest/authentication/",
      "source_2": "https://developer.paypal.com/api/rest/",
      "source_3": "https://developer.paypal.com/sdk/"
    }
  },
  {
    "name": "Shopify Admin API",
    "category": "E-commerce / Shopping",
    "description": "Cataloged API provider.",
    "signup_url": "https://shopify.dev",
    "pricing_url": "https://www.shopify.com/pricing",
    "documentation_url": "https://shopify.dev/docs/apps/launch/billing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": [
      "OAuth 2.0 for installed apps",
      "Access tokens (including custom-app/admin API access tokens)"
    ],
    "protocols": [
      "GraphQL",
      "REST",
      "HTTPS",
      "JSON"
    ],
    "sdk_languages": [
      "JavaScript/TypeScript",
      "Ruby",
      "PHP"
    ],
    "commercial_use": true,
    "self_hostable": false,
    "webhooks": true,
    "rate_limit": "GraphQL Admin API uses a leaky-bucket cost limit (shop-specific); REST Admin API uses a leaky-bucket limit of 40 requests per app per store per minute (2 requests/second), with Plus stores having a larger bucket.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "product/catalog data",
      "orders",
      "customers",
      "inventory",
      "payments/checkout",
      "store management"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://shopify.dev/docs/apps/launch/billing",
      "source_1": "https://shopify.dev/docs/apps/build/authentication-authorization",
      "source_2": "https://shopify.dev/docs/api/admin-graphql",
      "source_3": "https://shopify.dev/docs/api/libraries"
    }
  },
  {
    "name": "Square API",
    "category": "E-commerce / Shopping",
    "description": "Cataloged API provider.",
    "signup_url": "https://developer.squareup.com",
    "pricing_url": "https://squareup.com/us/en/pricing",
    "documentation_url": "https://developer.squareup.com/docs/build-basics/access-tokens",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": [
      "OAuth 2.0",
      "Personal access tokens",
      "Application access tokens"
    ],
    "protocols": [
      "REST",
      "JSON",
      "HTTPS"
    ],
    "sdk_languages": [
      "Java",
      ".NET",
      "PHP",
      "Python",
      "Ruby",
      "Node.js"
    ],
    "commercial_use": true,
    "self_hostable": false,
    "webhooks": true,
    "rate_limit": "10 requests per second per application per merchant, with endpoint-specific limits documented in the API reference.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "product/catalog data",
      "orders",
      "customers",
      "inventory",
      "payments/checkout",
      "store management"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://developer.squareup.com/docs/build-basics/access-tokens",
      "source_1": "https://developer.squareup.com/docs/build-basics/access-tokens",
      "source_2": "https://developer.squareup.com/reference/square",
      "source_3": "https://developer.squareup.com/docs/devtools/sdks"
    }
  },
  {
    "name": "WooCommerce REST API",
    "category": "E-commerce / Shopping",
    "description": "Cataloged API provider.",
    "signup_url": "https://woocommerce.github.io/woocommerce-rest-api-docs/",
    "pricing_url": "https://woocommerce.com/products/woocommerce/",
    "documentation_url": "https://woocommerce.github.io/woocommerce-rest-api-docs/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": [
      "API keys (consumer key and consumer secret)",
      "Basic Authentication over HTTPS",
      "OAuth 1.0a for applicable clients"
    ],
    "protocols": [
      "REST",
      "JSON",
      "HTTPS"
    ],
    "sdk_languages": [
      "Unavailable"
    ],
    "commercial_use": true,
    "self_hostable": true,
    "webhooks": true,
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "product/catalog data",
      "orders",
      "customers",
      "inventory",
      "payments/checkout",
      "store management"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://woocommerce.github.io/woocommerce-rest-api-docs/",
      "source_1": "https://woocommerce.github.io/woocommerce-rest-api-docs/#authentication",
      "source_2": "https://woocommerce.github.io/woocommerce-rest-api-docs/",
      "source_3": "https://woocommerce.github.io/woocommerce-rest-api-docs/"
    }
  },
  {
    "name": "Bandwidth",
    "category": "Email / SMS (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://dashboard.bandwidth.com",
    "pricing_url": "https://www.bandwidth.com/pricing/",
    "documentation_url": "https://dev.bandwidth.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "HTTP Basic authentication (application ID and API token)",
    "protocols": [
      "REST/HTTP",
      "SMS",
      "MMS",
      "RCS"
    ],
    "sdk_languages": [
      "Java",
      "C#",
      "PHP",
      "Python",
      "Ruby",
      "Node.js"
    ],
    "commercial_use": "Yes",
    "self_hostable": false,
    "webhooks": true,
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "transactional email",
      "SMS/MMS",
      "voice/messaging where offered",
      "templates and sender management",
      "delivery tracking",
      "webhooks/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://dev.bandwidth.com/",
      "source_1": "https://dev.bandwidth.com/ap-docs/",
      "source_2": "https://dev.bandwidth.com/messaging/",
      "source_3": "https://dev.bandwidth.com/"
    }
  },
  {
    "name": "ClickSend",
    "category": "Email / SMS (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://dashboard.clicksend.com",
    "pricing_url": "https://www.clicksend.com/us/pricing/",
    "documentation_url": "https://www.clicksend.com/us/pricing/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the trial account; payment is required for paid usage",
    "authentication": "HTTP Basic authentication using ClickSend username and API key",
    "protocols": [
      "REST/HTTP",
      "SMS",
      "MMS",
      "Email",
      "SMTP"
    ],
    "sdk_languages": [
      "PHP",
      "Python",
      "Ruby",
      "Node.js",
      "C#",
      "Java"
    ],
    "commercial_use": "Yes",
    "self_hostable": false,
    "webhooks": true,
    "rate_limit": "Unavailable",
    "free_tier_reset": "No recurring free tier; trial credit is one-time",
    "uses": [
      "transactional email",
      "SMS/MMS",
      "voice/messaging where offered",
      "templates and sender management",
      "delivery tracking",
      "webhooks/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.clicksend.com/us/pricing/",
      "source_1": "https://developers.clicksend.com/",
      "source_2": "https://developers.clicksend.com/",
      "source_3": "https://developers.clicksend.com/"
    }
  },
  {
    "name": "EmailJS",
    "category": "Email / SMS (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.emailjs.com",
    "pricing_url": "https://www.emailjs.com/pricing/",
    "documentation_url": "https://www.emailjs.com/pricing/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the free plan",
    "authentication": "Public key (user ID) in the client SDK/API request",
    "protocols": [
      "HTTPS",
      "Email/SMTP"
    ],
    "sdk_languages": [
      "JavaScript"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": false,
    "webhooks": "Unavailable",
    "rate_limit": "200 requests/month on the free plan",
    "free_tier_reset": "Monthly",
    "uses": [
      "transactional email",
      "SMS/MMS",
      "voice/messaging where offered",
      "templates and sender management",
      "delivery tracking",
      "webhooks/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.emailjs.com/pricing/",
      "source_1": "https://www.emailjs.com/docs/sdk/installation/",
      "source_2": "https://www.emailjs.com/docs/",
      "source_3": "https://www.emailjs.com/docs/sdk/installation/"
    }
  },
  {
    "name": "Infobip",
    "category": "Email / SMS (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.infobip.com",
    "pricing_url": "https://www.infobip.com/pricing",
    "documentation_url": "https://www.infobip.com/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key in the Authorization header (App/Account API key)",
    "protocols": [
      "REST/HTTP",
      "SMS",
      "MMS",
      "RCS",
      "WhatsApp",
      "Email",
      "SMPP"
    ],
    "sdk_languages": [
      "C#",
      "Java",
      "Node.js",
      "PHP",
      "Python",
      "Ruby"
    ],
    "commercial_use": "Yes",
    "self_hostable": false,
    "webhooks": true,
    "rate_limit": "Unavailable; limits vary by product and account",
    "free_tier_reset": "Unavailable",
    "uses": [
      "transactional email",
      "SMS/MMS",
      "voice/messaging where offered",
      "templates and sender management",
      "delivery tracking",
      "webhooks/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.infobip.com/pricing",
      "source_1": "https://www.infobip.com/docs/api/essentials/api-essentials",
      "source_2": "https://www.infobip.com/docs/essentials/",
      "source_3": "https://www.infobip.com/docs/api/sdks"
    }
  },
  {
    "name": "Mailtrap",
    "category": "Email / SMS (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://mailtrap.io",
    "pricing_url": "https://mailtrap.io/pricing/",
    "documentation_url": "https://mailtrap.io/pricing/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API token for the REST API; SMTP credentials for SMTP sending/testing",
    "protocols": [
      "SMTP",
      "REST API"
    ],
    "sdk_languages": [
      "Official documentation publishes integration examples/libraries for cURL, PHP, Python, Ruby, Node.js, Java, and .NET; no single official SDK-language support matrix found"
    ],
    "commercial_use": "Yes; paid plans are offered for business/production email sending",
    "self_hostable": "No self-hosted deployment option is published in the official product documentation",
    "webhooks": "Yes; sending webhooks/event notifications are documented",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Monthly (free-plan allowance is described as monthly)",
    "uses": [
      "transactional email",
      "SMS/MMS",
      "voice/messaging where offered",
      "templates and sender management",
      "delivery tracking",
      "webhooks/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://mailtrap.io/pricing/",
      "source_1": "https://docs.mailtrap.io/email-api-smtp/integration-guides/api-integration/",
      "source_2": "https://docs.mailtrap.io/email-api-smtp/",
      "source_3": "https://docs.mailtrap.io/email-api-smtp/integration-guides/"
    }
  },
  {
    "name": "Sinch",
    "category": "Email / SMS (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://dashboard.sinch.com",
    "pricing_url": "https://www.sinch.com/pricing/",
    "documentation_url": "https://developers.sinch.com/docs/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Project ID and access key/secret (product-dependent); Sinch APIs also document OAuth 2.0 for applicable APIs",
    "protocols": [
      "REST API",
      "SIP (Voice products)",
      "WebSocket (product-dependent)"
    ],
    "sdk_languages": [
      "Java, Node.js, Python, C#, PHP, and Go examples/SDKs are published for applicable Sinch products"
    ],
    "commercial_use": "Yes; Sinch publishes business pricing and commercial services",
    "self_hostable": "No self-hosted deployment option is published; Sinch documents hosted cloud APIs",
    "webhooks": "Yes; callbacks/webhooks are documented for messaging and voice products",
    "rate_limit": "Product- and endpoint-specific; no single provider-wide limit is published",
    "free_tier_reset": "Unavailable",
    "uses": [
      "transactional email",
      "SMS/MMS",
      "voice/messaging where offered",
      "templates and sender management",
      "delivery tracking",
      "webhooks/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://developers.sinch.com/docs/",
      "source_1": "https://developers.sinch.com/docs/voice/api-reference/authentication/",
      "source_2": "https://developers.sinch.com/docs/",
      "source_3": "https://developers.sinch.com/docs/"
    }
  },
  {
    "name": "SparkPost",
    "category": "Email / SMS (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://app.sparkpost.com/join",
    "pricing_url": "https://www.sparkpost.com/pricing/",
    "documentation_url": "https://www.sparkpost.com/pricing/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key in the Authorization header; SMTP uses SMTP credentials",
    "protocols": [
      "REST API",
      "SMTP"
    ],
    "sdk_languages": [
      "Official developer documentation provides examples/libraries for cURL, Node.js, Python, PHP, Ruby, Java, and C#"
    ],
    "commercial_use": "Yes; SparkPost publishes paid commercial plans",
    "self_hostable": "No self-hosted deployment option is published in official SparkPost documentation",
    "webhooks": "Yes; SparkPost supports webhooks for message events",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Monthly (free allowance is presented as a monthly sending allowance)",
    "uses": [
      "transactional email",
      "SMS/MMS",
      "voice/messaging where offered",
      "templates and sender management",
      "delivery tracking",
      "webhooks/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.sparkpost.com/pricing/",
      "source_1": "https://developers.sparkpost.com/api/",
      "source_2": "https://developers.sparkpost.com/api/",
      "source_3": "https://developers.sparkpost.com/"
    }
  },
  {
    "name": "Telnyx",
    "category": "Email / SMS (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://portal.telnyx.com",
    "pricing_url": "https://telnyx.com/pricing",
    "documentation_url": "https://telnyx.com/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Bearer API key; Telnyx also documents API keys and OAuth 2.0 for supported integrations",
    "protocols": [
      "REST API",
      "WebSocket",
      "SIP",
      "RTP (media products)"
    ],
    "sdk_languages": [
      "Official Telnyx SDKs are documented for Node.js, Python, Ruby, PHP, Java, and .NET"
    ],
    "commercial_use": "Yes; Telnyx publishes usage-based commercial pricing",
    "self_hostable": "No self-hosted Telnyx platform deployment is published; Telnyx provides hosted network services",
    "webhooks": "Yes; Telnyx documents webhook event delivery and signing",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "transactional email",
      "SMS/MMS",
      "voice/messaging where offered",
      "templates and sender management",
      "delivery tracking",
      "webhooks/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://telnyx.com/pricing",
      "source_1": "https://developers.telnyx.com/docs/api/v2/overview",
      "source_2": "https://developers.telnyx.com/docs",
      "source_3": "https://developers.telnyx.com/docs/api/v2/overview"
    }
  },
  {
    "name": "TextMagic",
    "category": "Email / SMS (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.textmagic.com",
    "pricing_url": "https://www.textmagic.com/pricing/",
    "documentation_url": "https://www.textmagic.com/pricing/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key (access token) authentication",
    "protocols": [
      "HTTPS REST API"
    ],
    "sdk_languages": [
      "Unavailable"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "transactional email",
      "SMS/MMS",
      "voice/messaging where offered",
      "templates and sender management",
      "delivery tracking",
      "webhooks/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.textmagic.com/pricing/",
      "source_1": "https://developers.textmagic.com/",
      "source_2": "https://developers.textmagic.com/",
      "source_3": "https://developers.textmagic.com/"
    }
  },
  {
    "name": "Brevo (Sendinblue)",
    "category": "Email / SMS / Communication",
    "description": "Cataloged API provider.",
    "signup_url": "https://onboarding.brevo.com/account/register",
    "pricing_url": "https://www.brevo.com/pricing/",
    "documentation_url": "https://www.brevo.com/pricing/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the free plan (official pricing page says no credit card required)",
    "authentication": "API key or OAuth 2.0",
    "protocols": [
      "HTTPS REST API",
      "SMTP relay"
    ],
    "sdk_languages": [
      "C#",
      "Go",
      "Java",
      "Node.js",
      "PHP",
      "Python",
      "Ruby",
      "TypeScript"
    ],
    "commercial_use": "Yes (paid plans are offered for business use; license terms apply)",
    "self_hostable": "No (Brevo is documented as a hosted service)",
    "webhooks": true,
    "rate_limit": "300 requests per minute for API calls (unless otherwise specified)",
    "free_tier_reset": "Monthly (free plan quota renews monthly)",
    "uses": [
      "transactional email",
      "SMS/MMS",
      "voice/messaging where offered",
      "templates and sender management",
      "delivery tracking",
      "webhooks/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.brevo.com/pricing/",
      "source_1": "https://developers.brevo.com/docs/getting-started",
      "source_2": "https://developers.brevo.com/docs/getting-started",
      "source_3": "https://developers.brevo.com/docs/getting-started"
    }
  },
  {
    "name": "Mailgun",
    "category": "Email / SMS / Communication",
    "description": "Cataloged API provider.",
    "signup_url": "https://signup.mailgun.com/new/signup",
    "pricing_url": "https://www.mailgun.com/pricing/",
    "documentation_url": "https://www.mailgun.com/pricing/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "HTTP Basic authentication using API key",
    "protocols": [
      "HTTPS REST API",
      "SMTP"
    ],
    "sdk_languages": [
      "PHP",
      "Python",
      "Ruby",
      "Java",
      "C#",
      "Go"
    ],
    "commercial_use": "Yes (commercial plans and business use are offered; terms apply)",
    "self_hostable": "No (Mailgun is a hosted service)",
    "webhooks": true,
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "transactional email",
      "SMS/MMS",
      "voice/messaging where offered",
      "templates and sender management",
      "delivery tracking",
      "webhooks/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.mailgun.com/pricing/",
      "source_1": "https://documentation.mailgun.com/docs/mailgun/api-reference/authentication/",
      "source_2": "https://documentation.mailgun.com/docs/mailgun/api-reference/",
      "source_3": "https://documentation.mailgun.com/docs/mailgun/api-reference/"
    }
  },
  {
    "name": "Mailjet",
    "category": "Email / SMS / Communication",
    "description": "Cataloged API provider.",
    "signup_url": "https://app.mailjet.com/signup",
    "pricing_url": "https://www.mailjet.com/pricing/",
    "documentation_url": "https://www.mailjet.com/pricing/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the free plan",
    "authentication": "API key and secret key (Basic authentication); OAuth 2.0 for supported APIs",
    "protocols": [
      "HTTPS REST API",
      "SMTP relay"
    ],
    "sdk_languages": [
      "PHP",
      "Python",
      "Ruby",
      "Node.js",
      "Java",
      ".NET"
    ],
    "commercial_use": "Yes (commercial plans offered; terms apply)",
    "self_hostable": "No (Mailjet is a hosted service)",
    "webhooks": true,
    "rate_limit": "Unavailable",
    "free_tier_reset": "Monthly",
    "uses": [
      "transactional email",
      "SMS/MMS",
      "voice/messaging where offered",
      "templates and sender management",
      "delivery tracking",
      "webhooks/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.mailjet.com/pricing/",
      "source_1": "https://dev.mailjet.com/email/guides/",
      "source_2": "https://dev.mailjet.com/email/guides/",
      "source_3": "https://dev.mailjet.com/email/guides/"
    }
  },
  {
    "name": "MessageBird",
    "category": "Email / SMS / Communication",
    "description": "Cataloged API provider.",
    "signup_url": "https://dashboard.messagebird.com/en/sign-up",
    "pricing_url": "https://messagebird.com/pricing",
    "documentation_url": "https://messagebird.com/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Access key in the Authorization header",
    "protocols": [
      "HTTPS REST API",
      "SMPP"
    ],
    "sdk_languages": [
      "PHP",
      "Python",
      "Ruby",
      "Java",
      "Node.js",
      ".NET"
    ],
    "commercial_use": "Yes (business communications service; terms apply)",
    "self_hostable": "No (MessageBird is a hosted service)",
    "webhooks": true,
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "transactional email",
      "SMS/MMS",
      "voice/messaging where offered",
      "templates and sender management",
      "delivery tracking",
      "webhooks/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://messagebird.com/pricing",
      "source_1": "https://developers.messagebird.com/api/",
      "source_2": "https://developers.messagebird.com/",
      "source_3": "https://developers.messagebird.com/"
    }
  },
  {
    "name": "Plivo",
    "category": "Email / SMS / Communication",
    "description": "Cataloged API provider.",
    "signup_url": "https://console.plivo.com/accounts/register/",
    "pricing_url": "https://www.plivo.com/pricing/",
    "documentation_url": "https://www.plivo.com/pricing/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the trial account (trial credit is provided)",
    "authentication": "Auth ID and Auth Token using HTTP Basic authentication",
    "protocols": [
      "HTTPS REST API",
      "SIP",
      "SMPP"
    ],
    "sdk_languages": [
      "Python",
      "Ruby",
      "PHP",
      "Node.js",
      "Java",
      ".NET",
      "Go"
    ],
    "commercial_use": "Yes (paid commercial service; terms apply)",
    "self_hostable": "No (Plivo is a hosted service)",
    "webhooks": true,
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "transactional email",
      "SMS/MMS",
      "voice/messaging where offered",
      "templates and sender management",
      "delivery tracking",
      "webhooks/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-doc-review",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.plivo.com/pricing/",
      "source_1": "https://www.plivo.com/docs/messaging/api/",
      "source_2": "https://www.plivo.com/docs/",
      "source_3": "https://www.plivo.com/docs/messaging/quickstart/"
    }
  },
  {
    "name": "Postmark",
    "category": "Email / SMS / Communication",
    "description": "Cataloged API provider.",
    "signup_url": "https://account.postmarkapp.com/sign_up",
    "pricing_url": "https://postmarkapp.com/pricing",
    "documentation_url": "https://postmarkapp.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No credit card is required to start the free developer plan.",
    "authentication": "The API authenticates with a Server API Token or Account API Token supplied in the X-Postmark-Server-Token or X-Postmark-Account-Token header.",
    "protocols": [
      "HTTPS REST API",
      "SMTP"
    ],
    "sdk_languages": [
      "C#",
      "Java",
      "Node.js",
      "PHP",
      "Python",
      "Ruby"
    ],
    "commercial_use": "Commercial use is permitted under Postmark's Terms of Service, subject to the service restrictions and acceptable-use requirements.",
    "self_hostable": "Unavailable",
    "webhooks": "Postmark supports webhooks for delivery, bounce, spam complaint, open, click, subscription-change, and other message events.",
    "rate_limit": "The Postmark API limit is 500 requests per second per IP address.",
    "free_tier_reset": "The free developer plan includes 100 emails per month; the allowance resets monthly.",
    "uses": [
      "transactional email",
      "SMS/MMS",
      "voice/messaging where offered",
      "templates and sender management",
      "delivery tracking",
      "webhooks/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://postmarkapp.com/",
      "source_1": "https://postmarkapp.com/pricing",
      "source_2": "https://postmarkapp.com/developer/api/overview",
      "source_3": "https://postmarkapp.com/developer/user-guide/send-email/overview"
    }
  },
  {
    "name": "Vonage (Nexmo)",
    "category": "Email / SMS / Communication",
    "description": "Cataloged API provider.",
    "signup_url": "https://dashboard.nexmo.com/sign-up",
    "pricing_url": "https://www.vonage.com/communications-apis/pricing/",
    "documentation_url": "https://developer.vonage.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Vonage APIs authenticate using an API key and API secret, with JWT authentication used for some APIs; the applicable method is specified by the individual API reference.",
    "protocols": [
      "HTTPS REST API",
      "SIP"
    ],
    "sdk_languages": [
      "C#",
      "Java",
      "JavaScript",
      "PHP",
      "Python",
      "Ruby",
      "Go"
    ],
    "commercial_use": "Vonage's API Platform terms permit commercial use subject to the applicable terms, acceptable-use policy, and product restrictions.",
    "self_hostable": "Unavailable",
    "webhooks": "Vonage APIs document webhooks for asynchronous event notifications where supported by the API.",
    "rate_limit": "Rate limits are API-specific and are stated in the relevant Vonage API documentation; no single provider-wide limit is published.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "transactional email",
      "SMS/MMS",
      "voice/messaging where offered",
      "templates and sender management",
      "delivery tracking",
      "webhooks/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://developer.vonage.com/",
      "source_1": "https://developer.vonage.com/",
      "source_2": "https://developer.vonage.com/en/api/application.v2",
      "source_3": "https://developer.vonage.com/en/api"
    }
  },
  {
    "name": "Zoho ZeptoMail",
    "category": "Email / SMS / Communication",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.zoho.com/zeptomail/",
    "pricing_url": "https://www.zoho.com/zeptomail/pricing.html",
    "documentation_url": "https://www.zoho.com/zeptomail/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "A credit card is not required for the free trial; payment is required when purchasing credits.",
    "authentication": "The ZeptoMail Send Mail API authenticates with a Send Mail Token in the Authorization header (Zoho-enczapikey token).",
    "protocols": [
      "HTTPS REST API",
      "SMTP"
    ],
    "sdk_languages": [],
    "commercial_use": "ZeptoMail is a transactional-email service and may be used for business email subject to Zoho's terms and anti-spam policy; promotional/bulk marketing email is not allowed.",
    "self_hostable": "Unavailable",
    "webhooks": "ZeptoMail supports webhooks for email events and lets users configure webhook URLs for those events.",
    "rate_limit": "ZeptoMail documents API limits in its API documentation; a provider-wide numeric rate limit is not published there.",
    "free_tier_reset": "The free trial provides 10,000 emails and is available for 14 days; it is a one-time trial rather than a recurring monthly reset.",
    "uses": [
      "transactional email",
      "SMS/MMS",
      "voice/messaging where offered",
      "templates and sender management",
      "delivery tracking",
      "webhooks/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.zoho.com/zeptomail/",
      "source_1": "https://www.zoho.com/zeptomail/pricing.html",
      "source_2": "https://www.zoho.com/zeptomail/help/api/email-api.html",
      "source_3": "https://www.zoho.com/zeptomail/help/api/"
    }
  },
  {
    "name": "Alpaca (trading)",
    "category": "Finance / Crypto (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://alpaca.markets",
    "pricing_url": "https://alpaca.markets/pricing",
    "documentation_url": "https://docs.alpaca.markets/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No credit card is required for an Alpaca account; the official paper-trading documentation describes paper trading as free.",
    "authentication": "API key and secret key sent in APCA-API-KEY-ID and APCA-API-SECRET-KEY headers.",
    "protocols": [
      "REST",
      "WebSocket"
    ],
    "sdk_languages": [
      "Python",
      "JavaScript",
      "Go",
      "C#"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Trading API streaming uses WebSocket; Alpaca also documents webhooks for account/trading events.",
    "rate_limit": "The Trading API has a documented limit of 200 requests per minute per account.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "market/price data",
      "historical time series",
      "company/asset metadata",
      "economic or FX data",
      "portfolio/account data where offered",
      "trading/order APIs where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://docs.alpaca.markets/",
      "source_1": "https://docs.alpaca.markets/docs/paper-trading",
      "source_2": "https://docs.alpaca.markets/docs/authentication",
      "source_3": "https://docs.alpaca.markets/docs/streaming-market-data"
    }
  },
  {
    "name": "Binance API",
    "category": "Finance / Crypto (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.binance.com/en/binance-api",
    "pricing_url": "https://www.binance.com/en/fee/trading",
    "documentation_url": "https://developers.binance.com/docs/binance-spot-api-docs",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key authentication is required for API-key and signed endpoints; signed requests also require an HMAC SHA-256 signature using the secret key.",
    "protocols": [
      "REST",
      "WebSocket"
    ],
    "sdk_languages": [
      "C#",
      "Go",
      "Java",
      "Python",
      "Ruby",
      "Rust",
      "TypeScript"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Binance documents request-weight limits and an IP limit of 6,000 request weight per minute for the Spot REST API; responses include rate-limit headers.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "market/price data",
      "historical time series",
      "company/asset metadata",
      "economic or FX data",
      "portfolio/account data where offered",
      "trading/order APIs where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://developers.binance.com/docs/binance-spot-api-docs",
      "source_1": "https://developers.binance.com/docs/binance-spot-api-docs",
      "source_2": "https://developers.binance.com/docs/binance-spot-api-docs/rest-api/general-api-information",
      "source_3": "https://developers.binance.com/docs/binance-spot-api-docs/web-socket-streams"
    }
  },
  {
    "name": "BscScan",
    "category": "Finance / Crypto (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://bscscan.com/apis",
    "pricing_url": "https://bscscan.com/apis",
    "documentation_url": "https://docs.bscscan.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No credit card requirement is stated; the official API page describes API keys as free.",
    "authentication": "An API key is passed using the apikey query parameter.",
    "protocols": [
      "REST"
    ],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "The free API plan is limited to 5 calls per second and 100,000 calls per day.",
    "free_tier_reset": "The free daily limit resets every 24 hours.",
    "uses": [
      "market/price data",
      "historical time series",
      "company/asset metadata",
      "economic or FX data",
      "portfolio/account data where offered",
      "trading/order APIs where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://docs.bscscan.com/",
      "source_1": "https://docs.bscscan.com/getting-started/api-keys",
      "source_2": "https://docs.bscscan.com/getting-started/using-our-api",
      "source_3": "https://docs.bscscan.com/"
    }
  },
  {
    "name": "Coinbase API",
    "category": "Finance / Crypto (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://docs.cloud.coinbase.com",
    "pricing_url": "https://www.coinbase.com/pricing",
    "documentation_url": "https://docs.cdp.coinbase.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Coinbase documents CDP API-key authentication using a key name and private key, with JWT bearer tokens for authenticated requests; some public endpoints require no authentication.",
    "protocols": [
      "REST",
      "WebSocket"
    ],
    "sdk_languages": [
      "TypeScript",
      "Python",
      "Go"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Coinbase CDP documents webhooks for receiving asynchronous event notifications.",
    "rate_limit": "Coinbase documents endpoint-specific rate limits and returns rate-limit headers; limits vary by API and product.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "market/price data",
      "historical time series",
      "company/asset metadata",
      "economic or FX data",
      "portfolio/account data where offered",
      "trading/order APIs where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://docs.cdp.coinbase.com/",
      "source_1": "https://docs.cdp.coinbase.com/",
      "source_2": "https://docs.cdp.coinbase.com/get-started/authentication",
      "source_3": "https://docs.cdp.coinbase.com/exchange/introduction/websocket-feed"
    }
  },
  {
    "name": "CryptoCompare",
    "category": "Finance / Crypto (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://min-api.cryptocompare.com",
    "pricing_url": "https://www.cryptocompare.com/enterprise/",
    "documentation_url": "https://min-api.cryptocompare.com/documentation",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "CryptoCompare documents API-key authentication using the authorization header or an api_key query parameter; some endpoints are available without a key.",
    "protocols": [
      "REST",
      "WebSocket"
    ],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "CryptoCompare documents plan-dependent minute, hour, day, and month request limits.",
    "free_tier_reset": "The free plan's request allowance is documented as resetting monthly.",
    "uses": [
      "market/price data",
      "historical time series",
      "company/asset metadata",
      "economic or FX data",
      "portfolio/account data where offered",
      "trading/order APIs where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://min-api.cryptocompare.com/documentation",
      "source_1": "https://www.cryptocompare.com/enterprise/",
      "source_2": "https://min-api.cryptocompare.com/documentation/authorization",
      "source_3": "https://min-api.cryptocompare.com/documentation/websocket"
    }
  },
  {
    "name": "Etherscan",
    "category": "Finance / Crypto (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://etherscan.io/apis",
    "pricing_url": "https://etherscan.io/apis",
    "documentation_url": "https://etherscan.io/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the free API plan; a card is required only when subscribing to paid plans (official pricing).",
    "authentication": "API key authentication using the apikey parameter; API keys are generated in an Etherscan account.",
    "protocols": [
      "HTTPS REST API"
    ],
    "sdk_languages": [],
    "commercial_use": "Paid API plans are offered for commercial use; the free plan's permitted use is governed by Etherscan's terms.",
    "self_hostable": "No self-hosted deployment is published; Etherscan documents a hosted API service.",
    "webhooks": "Unavailable",
    "rate_limit": "Free API tier: 3 calls per second and 100,000 calls per day; paid tiers have higher documented limits.",
    "free_tier_reset": "Daily (the free tier quota is stated as 100,000 calls per day).",
    "uses": [
      "market/price data",
      "historical time series",
      "company/asset metadata",
      "economic or FX data",
      "portfolio/account data where offered",
      "trading/order APIs where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://etherscan.io/",
      "source_1": "https://etherscan.io/apis",
      "source_2": "https://docs.etherscan.io/getting-started/authentication",
      "source_3": "https://docs.etherscan.io/getting-started/endpoint-urls"
    }
  },
  {
    "name": "Financial Modeling Prep",
    "category": "Finance / Crypto (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://site.financialmodelingprep.com/developer/docs",
    "pricing_url": "https://site.financialmodelingprep.com/pricing-plans",
    "documentation_url": "https://financialmodelingprep.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the free plan; payment details are required for paid subscriptions.",
    "authentication": "API-key authentication using the apikey query parameter.",
    "protocols": [
      "HTTPS REST API"
    ],
    "sdk_languages": [],
    "commercial_use": "Commercial access is offered through paid plans; plan and license restrictions apply.",
    "self_hostable": "No self-hosted version is published.",
    "webhooks": "Unavailable",
    "rate_limit": "The free plan is limited to 250 API requests per day.",
    "free_tier_reset": "Daily.",
    "uses": [
      "market/price data",
      "historical time series",
      "company/asset metadata",
      "economic or FX data",
      "portfolio/account data where offered",
      "trading/order APIs where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://financialmodelingprep.com/",
      "source_1": "https://site.financialmodelingprep.com/pricing-plans",
      "source_2": "https://site.financialmodelingprep.com/developer/docs",
      "source_3": "https://site.financialmodelingprep.com/developer/docs"
    }
  },
  {
    "name": "Kraken API",
    "category": "Finance / Crypto (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.kraken.com/features/api",
    "pricing_url": "https://www.kraken.com/features/api#pricing",
    "documentation_url": "https://www.kraken.com/features/api",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No API credit card requirement is published; API access uses a Kraken account and API keys.",
    "authentication": "Public endpoints require no authentication; private REST requests use API key, nonce, and HMAC-SHA512 signature; private WebSocket uses a token.",
    "protocols": [
      "HTTPS REST API",
      "WebSocket API"
    ],
    "sdk_languages": [],
    "commercial_use": "Unavailable in the API documentation; commercial rights depend on Kraken's applicable terms.",
    "self_hostable": "No self-hosted Kraken API server is published.",
    "webhooks": "Unavailable",
    "rate_limit": "REST private endpoints use a per-key call counter (with documented tier-dependent limits); WebSocket has documented per-connection rate limits.",
    "free_tier_reset": "Not applicable; Kraken does not publish a separate free-tier quota/reset in the API documentation.",
    "uses": [
      "market/price data",
      "historical time series",
      "company/asset metadata",
      "economic or FX data",
      "portfolio/account data where offered",
      "trading/order APIs where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.kraken.com/features/api",
      "source_1": "https://docs.kraken.com/api/docs/guides/spot-rest-auth/",
      "source_2": "https://docs.kraken.com/api/docs/guides/spot-rest-auth/",
      "source_3": "https://docs.kraken.com/api/"
    }
  },
  {
    "name": "Marketstack",
    "category": "Finance / Crypto (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://marketstack.com",
    "pricing_url": "https://marketstack.com/product",
    "documentation_url": "https://marketstack.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the free plan; paid subscriptions require payment details.",
    "authentication": "API-key authentication using the access_key query parameter.",
    "protocols": [
      "HTTPS REST API"
    ],
    "sdk_languages": [],
    "commercial_use": "Commercial use is available on paid plans; the free plan is limited by its published plan terms.",
    "self_hostable": "No self-hosted deployment is published.",
    "webhooks": "Unavailable",
    "rate_limit": "Free plan: 100 requests per month; higher plans publish larger monthly quotas.",
    "free_tier_reset": "Monthly.",
    "uses": [
      "market/price data",
      "historical time series",
      "company/asset metadata",
      "economic or FX data",
      "portfolio/account data where offered",
      "trading/order APIs where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://marketstack.com/",
      "source_1": "https://marketstack.com/product",
      "source_2": "https://marketstack.com/documentation",
      "source_3": "https://marketstack.com/documentation"
    }
  },
  {
    "name": "Messari",
    "category": "Finance / Crypto (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://messari.io/api",
    "pricing_url": "https://messari.io/pricing",
    "documentation_url": "https://messari.io/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No card requirement is published for the free API access.",
    "authentication": "API-key authentication using the x-messari-api-key HTTP header.",
    "protocols": [
      "HTTPS REST API"
    ],
    "sdk_languages": [],
    "commercial_use": "Commercial licensing is available through Messari's paid products; rights for the free API access are governed by Messari's terms.",
    "self_hostable": "No self-hosted Messari API is published.",
    "webhooks": "Unavailable",
    "rate_limit": "The API documentation publishes a rate limit of 20 requests per minute for the applicable API access.",
    "free_tier_reset": "Monthly quota/reset is not published in the current API documentation.",
    "uses": [
      "market/price data",
      "historical time series",
      "company/asset metadata",
      "economic or FX data",
      "portfolio/account data where offered",
      "trading/order APIs where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://messari.io/",
      "source_1": "https://messari.io/pricing",
      "source_2": "https://docs.messari.io/reference/authentication",
      "source_3": "https://docs.messari.io/"
    }
  },
  {
    "name": "Nasdaq Data Link (Quandl)",
    "category": "Finance / Crypto (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://data.nasdaq.com",
    "pricing_url": "https://data.nasdaq.com/publishers",
    "documentation_url": "https://docs.data.nasdaq.com/docs/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the free account/API access; paid products require contacting Nasdaq Data Link sales.",
    "authentication": "API key supplied as the api_key query parameter or X-API-KEY header.",
    "protocols": [
      "HTTPS REST API"
    ],
    "sdk_languages": [],
    "commercial_use": "Commercial use is available under paid data/product licenses; dataset-specific terms apply.",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "The API documentation says rate limits depend on the user's subscription/data plan; no single universal limit is published.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "market/price data",
      "historical time series",
      "company/asset metadata",
      "economic or FX data",
      "portfolio/account data where offered",
      "trading/order APIs where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://docs.data.nasdaq.com/docs/",
      "source_1": "https://docs.data.nasdaq.com/docs/getting-started",
      "source_2": "https://docs.data.nasdaq.com/docs/parameters-2",
      "source_3": "https://docs.data.nasdaq.com/docs/overview"
    }
  },
  {
    "name": "Tradier",
    "category": "Finance / Crypto (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://tradier.com",
    "pricing_url": "https://tradier.com/individuals/pricing",
    "documentation_url": "https://docs.tradier.com/docs/getting-started",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No API credit card requirement is published; API access is tied to a Tradier brokerage account or sandbox account.",
    "authentication": "OAuth 2.0 bearer access token in the Authorization header.",
    "protocols": [
      "HTTPS REST API",
      "WebSocket"
    ],
    "sdk_languages": [],
    "commercial_use": "Commercial/API use is governed by Tradier's API agreement and account terms; no blanket commercial-use permission is published.",
    "self_hostable": "Unavailable",
    "webhooks": "Tradier documents account streaming/webhooks for event notifications.",
    "rate_limit": "Market-data requests are limited to 120 requests per minute; trading requests are limited to 60 requests per minute.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "market/price data",
      "historical time series",
      "company/asset metadata",
      "economic or FX data",
      "portfolio/account data where offered",
      "trading/order APIs where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://docs.tradier.com/docs/getting-started",
      "source_1": "https://docs.tradier.com/docs/getting-started",
      "source_2": "https://docs.tradier.com/docs/authentication",
      "source_3": "https://docs.tradier.com/docs/streaming"
    }
  },
  {
    "name": "CoinAPI",
    "category": "Finance / Crypto / Economics",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.coinapi.io/signup",
    "pricing_url": "https://www.coinapi.io/pricing",
    "documentation_url": "https://docs.coinapi.io/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the free plan; the pricing page states no credit card is required to start.",
    "authentication": "API key in the X-CoinAPI-Key HTTP header.",
    "protocols": [
      "HTTPS REST API",
      "WebSocket"
    ],
    "sdk_languages": [
      "C#",
      "C++",
      "Go",
      "Java",
      "JavaScript",
      "PHP",
      "Python",
      "Ruby",
      "Swift"
    ],
    "commercial_use": "Commercial use is permitted on paid plans subject to CoinAPI terms and plan limits.",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Rate limits are plan-dependent; CoinAPI documents limits in the plan/account quota information.",
    "free_tier_reset": "The free plan is limited to 100 requests per day.",
    "uses": [
      "market/price data",
      "historical time series",
      "company/asset metadata",
      "economic or FX data",
      "portfolio/account data where offered",
      "trading/order APIs where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://docs.coinapi.io/",
      "source_1": "https://www.coinapi.io/pricing",
      "source_2": "https://docs.coinapi.io/market-data/rest-api/authentication",
      "source_3": "https://docs.coinapi.io/market-data/rest-api"
    }
  },
  {
    "name": "CoinGecko API",
    "category": "Finance / Crypto / Economics",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.coingecko.com/en/api",
    "pricing_url": "https://www.coingecko.com/en/api/pricing",
    "documentation_url": "https://docs.coingecko.com/reference/introduction",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the Demo plan; CoinGecko says no credit card is required.",
    "authentication": "Demo and paid API keys are sent in the x-cg-demo-api-key or x-cg-pro-api-key header (query parameter is also documented).",
    "protocols": [
      "HTTPS REST API"
    ],
    "sdk_languages": [],
    "commercial_use": "Commercial use is available on paid plans subject to the applicable CoinGecko API terms; the Demo plan is not a commercial-use license.",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Demo plan: 30 calls per minute; paid-plan limits vary by plan.",
    "free_tier_reset": "Demo plan credits reset monthly; the plan includes 10,000 call credits per month.",
    "uses": [
      "market/price data",
      "historical time series",
      "company/asset metadata",
      "economic or FX data",
      "portfolio/account data where offered",
      "trading/order APIs where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://docs.coingecko.com/reference/introduction",
      "source_1": "https://www.coingecko.com/en/api/pricing",
      "source_2": "https://docs.coingecko.com/reference/authentication",
      "source_3": "https://docs.coingecko.com/reference/introduction"
    }
  },
  {
    "name": "CoinMarketCap API",
    "category": "Finance / Crypto / Economics",
    "description": "Cataloged API provider.",
    "signup_url": "https://coinmarketcap.com/api/",
    "pricing_url": "https://coinmarketcap.com/api/pricing",
    "documentation_url": "https://coinmarketcap.com/api/documentation/v1/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the Basic free plan; CoinMarketCap's pricing page says no credit card is required.",
    "authentication": "API key in the X-CMC_PRO_API_KEY header (the query parameter form is also documented).",
    "protocols": [
      "HTTPS REST API"
    ],
    "sdk_languages": [],
    "commercial_use": "Commercial use requires an appropriate paid plan and is subject to CoinMarketCap's terms; the free plan is not a commercial license.",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Basic plan: 30 requests per minute and 9,000 credits per month; other limits are plan-dependent.",
    "free_tier_reset": "Basic plan credits reset monthly.",
    "uses": [
      "market/price data",
      "historical time series",
      "company/asset metadata",
      "economic or FX data",
      "portfolio/account data where offered",
      "trading/order APIs where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://coinmarketcap.com/api/documentation/v1/",
      "source_1": "https://coinmarketcap.com/api/pricing",
      "source_2": "https://coinmarketcap.com/api/documentation/v1/#section/Authentication",
      "source_3": "https://coinmarketcap.com/api/documentation/v1/"
    }
  },
  {
    "name": "Currencylayer",
    "category": "Finance / Crypto / Economics",
    "description": "Cataloged API provider.",
    "signup_url": "https://currencylayer.com/product",
    "pricing_url": "https://currencylayer.com/product",
    "documentation_url": "https://currencylayer.com/documentation",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the free plan; the pricing page says no credit card is required.",
    "authentication": "Access key supplied as the access_key query parameter.",
    "protocols": [
      "HTTPS REST API"
    ],
    "sdk_languages": [],
    "commercial_use": "Commercial use is available on paid plans subject to CurrencyLayer's terms; free-plan usage is limited by the published plan terms.",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "The free plan allows 250 requests per month; limits vary by subscription plan.",
    "free_tier_reset": "Monthly.",
    "uses": [
      "market/price data",
      "historical time series",
      "company/asset metadata",
      "economic or FX data",
      "portfolio/account data where offered",
      "trading/order APIs where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://currencylayer.com/documentation",
      "source_1": "https://currencylayer.com/product",
      "source_2": "https://currencylayer.com/documentation",
      "source_3": "https://currencylayer.com/documentation"
    }
  },
  {
    "name": "ExchangeRate-API",
    "category": "Finance / Crypto / Economics",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.exchangerate-api.com",
    "pricing_url": "https://www.exchangerate-api.com/pricing",
    "documentation_url": "https://www.exchangerate-api.com/docs/overview",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the free open-access endpoint; the paid plans require a subscription and the provider does not publish a general credit-card requirement.",
    "authentication": "For the authenticated endpoint, the API key is embedded in the HTTPS URL path.",
    "protocols": [
      "HTTPS REST API"
    ],
    "sdk_languages": [],
    "commercial_use": "Commercial use is permitted by the paid plans; the free open-access service is for personal/non-commercial use.",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "The free open-access endpoint is limited to 1,500 requests per month; authenticated plan limits are determined by subscription.",
    "free_tier_reset": "Monthly for the 1,500-request free open-access allowance.",
    "uses": [
      "market/price data",
      "historical time series",
      "company/asset metadata",
      "economic or FX data",
      "portfolio/account data where offered",
      "trading/order APIs where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.exchangerate-api.com/docs/overview",
      "source_1": "https://www.exchangerate-api.com/pricing",
      "source_2": "https://www.exchangerate-api.com/docs/authentication",
      "source_3": "https://www.exchangerate-api.com/docs/overview"
    }
  },
  {
    "name": "Federal Reserve (FRED)",
    "category": "Finance / Crypto / Economics",
    "description": "Cataloged API provider.",
    "signup_url": "https://fred.stlouisfed.org/docs/api/api_key.html",
    "pricing_url": "https://fred.stlouisfed.org/docs/api/api_key.html",
    "documentation_url": "https://fred.stlouisfed.org/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": false,
    "authentication": "API key (api_key parameter); registration required",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON",
      "XML"
    ],
    "sdk_languages": [
      "Unavailable"
    ],
    "commercial_use": "Permitted subject to FRED API terms and attribution requirements",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "120 requests per minute and 100,000 requests per day",
    "free_tier_reset": "Daily (100,000-request daily limit); no paid API tier is published",
    "uses": [
      "market/price data",
      "historical time series",
      "company/asset metadata",
      "economic or FX data",
      "portfolio/account data where offered",
      "trading/order APIs where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://fred.stlouisfed.org/",
      "source_1": "https://fred.stlouisfed.org/docs/api/api_key.html",
      "source_2": "https://fred.stlouisfed.org/docs/api/api_key.html",
      "source_3": "https://fred.stlouisfed.org/docs/api/fred/"
    }
  },
  {
    "name": "Finnhub",
    "category": "Finance / Crypto / Economics",
    "description": "Cataloged API provider.",
    "signup_url": "https://finnhub.io/register",
    "pricing_url": "https://finnhub.io/pricing",
    "documentation_url": "https://finnhub.io/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": false,
    "authentication": "API token (token query parameter or Authorization header)",
    "protocols": [
      "HTTPS",
      "REST",
      "WebSocket",
      "JSON"
    ],
    "sdk_languages": [
      "Unavailable"
    ],
    "commercial_use": "Free plan is for personal use; commercial use requires a commercial plan",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "60 API calls per minute on the free plan",
    "free_tier_reset": "Per minute",
    "uses": [
      "market/price data",
      "historical time series",
      "company/asset metadata",
      "economic or FX data",
      "portfolio/account data where offered",
      "trading/order APIs where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://finnhub.io/",
      "source_1": "https://finnhub.io/pricing",
      "source_2": "https://finnhub.io/docs/api",
      "source_3": "https://finnhub.io/docs/api"
    }
  },
  {
    "name": "Fixer.io",
    "category": "Finance / Crypto / Economics",
    "description": "Cataloged API provider.",
    "signup_url": "https://fixer.io/product",
    "pricing_url": "https://fixer.io/plans",
    "documentation_url": "https://fixer.io/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": false,
    "authentication": "API access key (access_key query parameter)",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [
      "Unavailable"
    ],
    "commercial_use": "Commercial use is available on paid plans; free plan restrictions apply",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Free plan: 100 requests per month",
    "free_tier_reset": "Monthly",
    "uses": [
      "market/price data",
      "historical time series",
      "company/asset metadata",
      "economic or FX data",
      "portfolio/account data where offered",
      "trading/order APIs where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://fixer.io/",
      "source_1": "https://fixer.io/plans",
      "source_2": "https://fixer.io/documentation",
      "source_3": "https://fixer.io/documentation"
    }
  },
  {
    "name": "IEX Cloud",
    "category": "Finance / Crypto / Economics",
    "description": "Cataloged API provider.",
    "signup_url": "https://iexcloud.io/console/",
    "pricing_url": "https://iexcloud.io/pricing/",
    "documentation_url": "https://iexcloud.io/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [
      "Unavailable"
    ],
    "sdk_languages": [
      "Unavailable"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "market/price data",
      "historical time series",
      "company/asset metadata",
      "economic or FX data",
      "portfolio/account data where offered",
      "trading/order APIs where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://iexcloud.io/",
      "source_1": "https://iexcloud.io/",
      "source_2": "https://iexcloud.io/docs/api/",
      "source_3": "https://iexcloud.io/docs/api/"
    }
  },
  {
    "name": "Open Exchange Rates",
    "category": "Finance / Crypto / Economics",
    "description": "Cataloged API provider.",
    "signup_url": "https://openexchangerates.org/signup/free",
    "pricing_url": "https://openexchangerates.org/signup/free",
    "documentation_url": "https://openexchangerates.org/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": false,
    "authentication": "App ID (app_id query parameter)",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [
      "Unavailable"
    ],
    "commercial_use": "Commercial use requires a plan that permits it; free plan is limited by its license",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Free plan: 1,000 requests per month",
    "free_tier_reset": "Monthly",
    "uses": [
      "market/price data",
      "historical time series",
      "company/asset metadata",
      "economic or FX data",
      "portfolio/account data where offered",
      "trading/order APIs where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://openexchangerates.org/",
      "source_1": "https://openexchangerates.org/signup/free",
      "source_2": "https://openexchangerates.org/api/",
      "source_3": "https://openexchangerates.org/api/"
    }
  },
  {
    "name": "Plaid (banking)",
    "category": "Finance / Crypto / Economics",
    "description": "Cataloged API provider.",
    "signup_url": "https://dashboard.plaid.com/signup",
    "pricing_url": "https://plaid.com/pricing/",
    "documentation_url": "https://plaid.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API credentials: client_id and secret; access tokens are used for authenticated product calls.",
    "protocols": [
      "HTTPS",
      "JSON"
    ],
    "sdk_languages": [
      "JavaScript/Node.js",
      "Python",
      "Ruby",
      "Java",
      "Go",
      ".NET"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": true,
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "market/price data",
      "historical time series",
      "company/asset metadata",
      "economic or FX data",
      "portfolio/account data where offered",
      "trading/order APIs where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://plaid.com/",
      "source_1": "https://plaid.com/pricing/",
      "source_2": "https://plaid.com/docs/api/#authentication",
      "source_3": "https://plaid.com/docs/api/"
    }
  },
  {
    "name": "Polygon.io",
    "category": "Finance / Crypto / Economics",
    "description": "Cataloged API provider.",
    "signup_url": "https://polygon.io/dashboard/signup",
    "pricing_url": "https://polygon.io/pricing",
    "documentation_url": "https://polygon.io/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key, supplied as the apiKey query parameter or X-API-Key header where supported.",
    "protocols": [
      "REST",
      "WebSocket"
    ],
    "sdk_languages": [
      "Python",
      "JavaScript",
      "Go",
      "Java",
      ".NET"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "The free plan is limited to 5 API requests per minute; paid-plan limits depend on plan.",
    "free_tier_reset": "Per minute (free-plan request limit).",
    "uses": [
      "market/price data",
      "historical time series",
      "company/asset metadata",
      "economic or FX data",
      "portfolio/account data where offered",
      "trading/order APIs where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://polygon.io/",
      "source_1": "https://polygon.io/pricing",
      "source_2": "https://polygon.io/docs/rest/quickstart",
      "source_3": "https://polygon.io/docs/getting-started/overview"
    }
  },
  {
    "name": "Twelve Data",
    "category": "Finance / Crypto / Economics",
    "description": "Cataloged API provider.",
    "signup_url": "https://twelvedata.com/register",
    "pricing_url": "https://twelvedata.com/pricing",
    "documentation_url": "https://twelvedata.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key (apikey query parameter or apikey header).",
    "protocols": [
      "HTTPS",
      "REST",
      "WebSocket"
    ],
    "sdk_languages": [
      "Python",
      "JavaScript",
      "PHP",
      "R"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Free plan: 8 API credits per minute and 800 credits per day; limits vary by plan and endpoint.",
    "free_tier_reset": "Daily and per-minute limits (free plan).",
    "uses": [
      "market/price data",
      "historical time series",
      "company/asset metadata",
      "economic or FX data",
      "portfolio/account data where offered",
      "trading/order APIs where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://twelvedata.com/",
      "source_1": "https://twelvedata.com/pricing",
      "source_2": "https://twelvedata.com/docs#api_key",
      "source_3": "https://twelvedata.com/docs#introduction"
    }
  },
  {
    "name": "World Bank API",
    "category": "Finance / Crypto / Economics",
    "description": "Cataloged API provider.",
    "signup_url": "https://datahelpdesk.worldbank.org/knowledgebase/articles/889392",
    "pricing_url": "https://data.worldbank.org/summary-terms-of-use",
    "documentation_url": "https://data.worldbank.org/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": false,
    "authentication": "No API key or registration is required for the public API.",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON",
      "XML"
    ],
    "sdk_languages": [],
    "commercial_use": "Available under the World Bank Open Data Terms of Use; attribution and other stated conditions apply.",
    "self_hostable": "Unavailable",
    "webhooks": false,
    "rate_limit": "No published rate limit found in the official API overview/basic-call documentation.",
    "free_tier_reset": "Not applicable; the public API is free and does not publish a free-tier reset schedule.",
    "uses": [
      "market/price data",
      "historical time series",
      "company/asset metadata",
      "economic or FX data",
      "portfolio/account data where offered",
      "trading/order APIs where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://data.worldbank.org/",
      "source_1": "https://datahelpdesk.worldbank.org/knowledgebase/articles/889386-developer-information-overview",
      "source_2": "https://datahelpdesk.worldbank.org/knowledgebase/articles/889386-developer-information-overview",
      "source_3": "https://datahelpdesk.worldbank.org/knowledgebase/articles/898581-api-basic-call-structures"
    }
  },
  {
    "name": "Open Food Facts API",
    "category": "Food",
    "description": "Cataloged API provider.",
    "signup_url": "https://world.openfoodfacts.org/data",
    "pricing_url": "https://world.openfoodfacts.org/terms-of-use",
    "documentation_url": "https://world.openfoodfacts.org/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": false,
    "authentication": "Public read endpoints do not require an API key; write and authenticated operations require the documented user credentials/token flow.",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [],
    "commercial_use": "Allowed subject to the Open Food Facts terms and the applicable ODbL, database contents, and image/data licenses; attribution/share-alike conditions apply.",
    "self_hostable": true,
    "webhooks": "Unavailable",
    "rate_limit": "Product reads: 100 requests per minute; search: 10 requests per minute; the API documentation also requires a descriptive User-Agent.",
    "free_tier_reset": "Per minute (documented request limits).",
    "uses": [
      "food/recipe search",
      "ingredients",
      "nutrition data",
      "product lookup",
      "dietary metadata"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://world.openfoodfacts.org/",
      "source_1": "https://openfoodfacts.github.io/openfoodfacts-server/api/",
      "source_2": "https://openfoodfacts.github.io/openfoodfacts-server/api/",
      "source_3": "https://openfoodfacts.github.io/openfoodfacts-server/api/"
    }
  },
  {
    "name": "TheCocktailDB",
    "category": "Food",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.thecocktaildb.com/api.php",
    "pricing_url": "https://www.thecocktaildb.com/premium.php",
    "documentation_url": "https://www.thecocktaildb.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key (required for premium/paid API; free API supports test key 1)",
    "protocols": [
      "HTTPS REST"
    ],
    "sdk_languages": [
      "Unavailable"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Free API limited to 1 request per second; premium limits are plan-dependent",
    "free_tier_reset": "Unavailable",
    "uses": [
      "food/recipe search",
      "ingredients",
      "nutrition data",
      "product lookup",
      "dietary metadata"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.thecocktaildb.com/",
      "source_1": "https://www.thecocktaildb.com/premium.php",
      "source_2": "https://www.thecocktaildb.com/api.php",
      "source_3": "https://www.thecocktaildb.com/api.php"
    }
  },
  {
    "name": "TheMealDB",
    "category": "Food",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.themealdb.com/api.php",
    "pricing_url": "https://www.themealdb.com/premium.php",
    "documentation_url": "https://www.themealdb.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key for paid/premium access; free API uses test key 1",
    "protocols": [
      "HTTPS REST"
    ],
    "sdk_languages": [
      "Unavailable"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Free API limited to 1 request per second; premium limits are plan-dependent",
    "free_tier_reset": "Unavailable",
    "uses": [
      "food/recipe search",
      "ingredients",
      "nutrition data",
      "product lookup",
      "dietary metadata"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.themealdb.com/",
      "source_1": "https://www.themealdb.com/premium.php",
      "source_2": "https://www.themealdb.com/api.php",
      "source_3": "https://www.themealdb.com/api.php"
    }
  },
  {
    "name": "Yelp Fusion API",
    "category": "Food",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.yelp.com/developers",
    "pricing_url": "https://terms.yelp.com/tos/en_us/20240101_en_us.html",
    "documentation_url": "https://docs.developer.yelp.com/docs/fusion-intro",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "OAuth 2.0 bearer token (API key)",
    "protocols": [
      "HTTPS REST",
      "JSON"
    ],
    "sdk_languages": [
      "Unavailable (official documentation provides language examples, not official SDKs)"
    ],
    "commercial_use": "Subject to Yelp API Terms of Use; commercial use requires applicable authorization",
    "self_hostable": false,
    "webhooks": "Unavailable",
    "rate_limit": "API limit is documented in the response headers and depends on endpoint/account; Yelp does not publish one universal limit",
    "free_tier_reset": "Unavailable",
    "uses": [
      "food/recipe search",
      "ingredients",
      "nutrition data",
      "product lookup",
      "dietary metadata"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://docs.developer.yelp.com/docs/fusion-intro",
      "source_1": "https://docs.developer.yelp.com/docs/getting-started",
      "source_2": "https://docs.developer.yelp.com/docs/fusion-authentication",
      "source_3": "https://docs.developer.yelp.com/docs/fusion-intro"
    }
  },
  {
    "name": "Battle.net API",
    "category": "Gaming",
    "description": "Cataloged API provider.",
    "signup_url": "https://develop.battle.net",
    "pricing_url": "https://develop.battle.net/documentation",
    "documentation_url": "https://develop.battle.net/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "OAuth 2.0 client credentials; access token sent as Bearer token",
    "protocols": [
      "HTTPS REST",
      "JSON"
    ],
    "sdk_languages": [
      "Unavailable"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": false,
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "game/player data",
      "profiles/accounts",
      "matches/events",
      "statistics",
      "game metadata"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://develop.battle.net/",
      "source_1": "https://develop.battle.net/documentation",
      "source_2": "https://develop.battle.net/documentation/guides/using-oauth",
      "source_3": "https://develop.battle.net/documentation"
    }
  },
  {
    "name": "Riot Games API",
    "category": "Gaming",
    "description": "Cataloged API provider.",
    "signup_url": "https://developer.riotgames.com",
    "pricing_url": "https://developer.riotgames.com/policies/general",
    "documentation_url": "https://developer.riotgames.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key for development; production applications use an application API key; requests commonly use X-Riot-Token header",
    "protocols": [
      "HTTPS REST",
      "JSON"
    ],
    "sdk_languages": [
      "Unavailable (Riot publishes API documentation, not official SDKs)"
    ],
    "commercial_use": "Requires approval under Riot Games developer policies; commercial products must comply with the Developer Portal terms",
    "self_hostable": false,
    "webhooks": "Unavailable",
    "rate_limit": "Rate limits are application/method/service specific and communicated through response headers",
    "free_tier_reset": "Unavailable",
    "uses": [
      "game/player data",
      "profiles/accounts",
      "matches/events",
      "statistics",
      "game metadata"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://developer.riotgames.com/",
      "source_1": "https://developer.riotgames.com/docs/portal",
      "source_2": "https://developer.riotgames.com/docs/portal",
      "source_3": "https://developer.riotgames.com/apis"
    }
  },
  {
    "name": "Steam Web API",
    "category": "Gaming",
    "description": "Cataloged API provider.",
    "signup_url": "https://steamcommunity.com/dev",
    "pricing_url": "https://partner.steamgames.com/doc/webapi_overview",
    "documentation_url": "https://partner.steamgames.com/doc/webapi_overview",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key for protected Web API interfaces; some interfaces are public",
    "protocols": [
      "HTTPS",
      "HTTP GET"
    ],
    "sdk_languages": [],
    "commercial_use": "Subject to Steam Web API Terms of Use and Steamworks/Valve terms; no general commercial-use permission stated in the API overview",
    "self_hostable": "No: Valve-hosted Web API",
    "webhooks": "Unavailable",
    "rate_limit": "Valve does not publish a general rate limit in the Web API overview",
    "free_tier_reset": "Unavailable",
    "uses": [
      "game/player data",
      "profiles/accounts",
      "matches/events",
      "statistics",
      "game metadata"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://partner.steamgames.com/doc/webapi_overview",
      "source_1": "https://partner.steamgames.com/doc/webapi_overview",
      "source_2": "https://partner.steamgames.com/doc/webapi_overview",
      "source_3": "https://partner.steamgames.com/doc/webapi_overview"
    }
  },
  {
    "name": "CMS.gov Data API",
    "category": "Health / Fitness",
    "description": "Cataloged API provider.",
    "signup_url": "https://data.cms.gov",
    "pricing_url": "https://developer.cms.gov/data-api/",
    "documentation_url": "https://developer.cms.gov/data-api/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No credit card requirement is stated; public CMS data APIs are available without a paid account",
    "authentication": "API key is not required for the public CMS data API; access is via HTTPS endpoints",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "health/fitness records",
      "activity/biometrics",
      "medical/public-health datasets",
      "device integrations where permitted",
      "health analytics"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://developer.cms.gov/data-api/",
      "source_1": "https://developer.cms.gov/data-api/",
      "source_2": "https://developer.cms.gov/data-api/",
      "source_3": "https://developer.cms.gov/data-api/"
    }
  },
  {
    "name": "Fitbit API",
    "category": "Health / Fitness",
    "description": "Cataloged API provider.",
    "signup_url": "https://dev.fitbit.com",
    "pricing_url": "https://dev.fitbit.com/legal/",
    "documentation_url": "https://dev.fitbit.com/build/reference/web-api/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "OAuth 2.0",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [],
    "commercial_use": "Subject to Fitbit Developer API Terms of Service; permission and applicable terms depend on the use case",
    "self_hostable": "No: Fitbit-hosted API",
    "webhooks": "Supported through the Subscriptions API",
    "rate_limit": "150 requests per hour per user; response headers provide the remaining limit and reset time",
    "free_tier_reset": "Hourly (the request limit resets each hour)",
    "uses": [
      "health/fitness records",
      "activity/biometrics",
      "medical/public-health datasets",
      "device integrations where permitted",
      "health analytics"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://dev.fitbit.com/build/reference/web-api/",
      "source_1": "https://dev.fitbit.com/build/reference/web-api/",
      "source_2": "https://dev.fitbit.com/build/reference/web-api/",
      "source_3": "https://dev.fitbit.com/build/reference/web-api/"
    }
  },
  {
    "name": "Human API",
    "category": "Health / Fitness",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.humanapi.co",
    "pricing_url": "https://www.humanapi.co/",
    "documentation_url": "https://www.humanapi.co/docs/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "OAuth 2.0 and API credentials as described in Human API developer documentation",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Supported (Human API webhook/event documentation)",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "health/fitness records",
      "activity/biometrics",
      "medical/public-health datasets",
      "device integrations where permitted",
      "health analytics"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.humanapi.co/docs/",
      "source_1": "https://www.humanapi.co/docs/",
      "source_2": "https://www.humanapi.co/docs/",
      "source_3": "https://www.humanapi.co/docs/"
    }
  },
  {
    "name": "openFDA API",
    "category": "Health / Fitness",
    "description": "Cataloged API provider.",
    "signup_url": "https://open.fda.gov",
    "pricing_url": "https://open.fda.gov/apis/authentication/",
    "documentation_url": "https://open.fda.gov/apis/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No; an API key is optional for the standard public API",
    "authentication": "No authentication for basic access; optional API key via the api_key query parameter",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Without an API key: 240 requests per minute and 1,000 requests per day; with an API key: 240 requests per minute and 120,000 requests per day",
    "free_tier_reset": "Daily for the daily quota; minute-based for the per-minute quota",
    "uses": [
      "health/fitness records",
      "activity/biometrics",
      "medical/public-health datasets",
      "device integrations where permitted",
      "health analytics"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://open.fda.gov/apis/",
      "source_1": "https://open.fda.gov/apis/authentication/",
      "source_2": "https://open.fda.gov/apis/authentication/",
      "source_3": "https://open.fda.gov/apis/"
    }
  },
  {
    "name": "Strava API",
    "category": "Health / Fitness",
    "description": "Cataloged API provider.",
    "signup_url": "https://developers.strava.com",
    "pricing_url": "https://developers.strava.com/docs/",
    "documentation_url": "https://developers.strava.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "OAuth 2.0",
    "protocols": [
      "HTTPS",
      "REST"
    ],
    "sdk_languages": [
      "Ruby",
      "JavaScript",
      "Python",
      "PHP",
      "Java",
      "C#",
      "Go"
    ],
    "commercial_use": "Subject to Strava API Agreement; commercial applications require review/approval where stated by Strava",
    "self_hostable": false,
    "webhooks": true,
    "rate_limit": "200 requests per 15 minutes and 2,000 requests per day per application; 100 webhook events per 15 minutes and 1,000 per day",
    "free_tier_reset": "Unavailable",
    "uses": [
      "health/fitness records",
      "activity/biometrics",
      "medical/public-health datasets",
      "device integrations where permitted",
      "health analytics"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://developers.strava.com/",
      "source_1": "https://developers.strava.com/docs/get-started/",
      "source_2": "https://developers.strava.com/docs/authentication/",
      "source_3": "https://developers.strava.com/docs/reference/"
    }
  },
  {
    "name": "Withings API",
    "category": "Health / Fitness",
    "description": "Cataloged API provider.",
    "signup_url": "https://developer.withings.com",
    "pricing_url": "https://developer.withings.com/",
    "documentation_url": "https://developer.withings.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "OAuth 2.0",
    "protocols": [
      "HTTPS",
      "REST"
    ],
    "sdk_languages": [],
    "commercial_use": "Subject to Withings developer terms/partnership conditions; specific commercial permission is not published in the API reference",
    "self_hostable": false,
    "webhooks": true,
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "health/fitness records",
      "activity/biometrics",
      "medical/public-health datasets",
      "device integrations where permitted",
      "health analytics"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://developer.withings.com/",
      "source_1": "https://developer.withings.com/",
      "source_2": "https://developer.withings.com/developer-guide/v2/integration-guide/oauth2/",
      "source_3": "https://developer.withings.com/api-reference/"
    }
  },
  {
    "name": "Cloudinary",
    "category": "Images / Media",
    "description": "Cataloged API provider.",
    "signup_url": "https://cloudinary.com/users/register/free",
    "pricing_url": "https://cloudinary.com/pricing",
    "documentation_url": "https://cloudinary.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the free Programmable Media plan",
    "authentication": "API key and secret; signed or unsigned upload authentication; OAuth 2.0 for selected APIs",
    "protocols": [
      "HTTPS",
      "REST"
    ],
    "sdk_languages": [
      "Node.js",
      "Java",
      ".NET",
      "PHP",
      "Python",
      "Ruby",
      "Go",
      "Dart",
      "Elixir",
      "Perl",
      "Clojure"
    ],
    "commercial_use": true,
    "self_hostable": false,
    "webhooks": true,
    "rate_limit": "Unavailable (limits vary by product/API and plan)",
    "free_tier_reset": "Monthly (Cloudinary describes monthly free-plan allowances)",
    "uses": [
      "image search/retrieval",
      "image metadata",
      "transformation/optimization",
      "OCR or image analysis where offered",
      "media delivery"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://cloudinary.com/",
      "source_1": "https://cloudinary.com/pricing",
      "source_2": "https://cloudinary.com/documentation/api_reference",
      "source_3": "https://cloudinary.com/documentation/image_upload_api_reference"
    }
  },
  {
    "name": "Giphy API",
    "category": "Images / Media",
    "description": "Cataloged API provider.",
    "signup_url": "https://developers.giphy.com",
    "pricing_url": "https://developers.giphy.com/terms/",
    "documentation_url": "https://developers.giphy.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No card is specified as required for an API key in the official quick start",
    "authentication": "API key query parameter",
    "protocols": [
      "HTTPS",
      "REST"
    ],
    "sdk_languages": [
      "JavaScript",
      "iOS",
      "Android"
    ],
    "commercial_use": "Commercial use requires a GIPHY commercial API key/approval; terms and branding requirements apply",
    "self_hostable": false,
    "webhooks": false,
    "rate_limit": "Default beta key limit: 42 requests per hour; production keys have higher limits subject to GIPHY approval",
    "free_tier_reset": "Hourly (for the documented beta-key request limit)",
    "uses": [
      "image search/retrieval",
      "image metadata",
      "transformation/optimization",
      "OCR or image analysis where offered",
      "media delivery"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://developers.giphy.com/",
      "source_1": "https://developers.giphy.com/docs/api/",
      "source_2": "https://developers.giphy.com/docs/api/",
      "source_3": "https://developers.giphy.com/docs/api/"
    }
  },
  {
    "name": "imgix",
    "category": "Images / Media",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.imgix.com/signup",
    "pricing_url": "https://www.imgix.com/pricing",
    "documentation_url": "https://www.imgix.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Source URL plus optional secure URL signing token; management API uses API key/token",
    "protocols": [
      "HTTPS",
      "URL-based image transformation",
      "REST"
    ],
    "sdk_languages": [
      "Ruby",
      "PHP",
      "Node.js",
      "Python",
      "Go",
      "Java",
      ".NET"
    ],
    "commercial_use": "Commercial service governed by imgix terms and subscription agreement",
    "self_hostable": false,
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "image search/retrieval",
      "image metadata",
      "transformation/optimization",
      "OCR or image analysis where offered",
      "media delivery"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.imgix.com/",
      "source_1": "https://www.imgix.com/pricing",
      "source_2": "https://docs.imgix.com/en-US/apis/rendering/secure-url-parameters",
      "source_3": "https://docs.imgix.com/apis/rendering"
    }
  },
  {
    "name": "Pexels API",
    "category": "Images / Media",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.pexels.com/api/",
    "pricing_url": "https://www.pexels.com/api/",
    "documentation_url": "https://www.pexels.com/api/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No card is required to request an API key (official documentation describes registration and an API key, not card verification).",
    "authentication": "API key in the Authorization header.",
    "protocols": [
      "HTTPS",
      "REST"
    ],
    "sdk_languages": [
      "JavaScript",
      "PHP",
      "Python"
    ],
    "commercial_use": "Permitted subject to the Pexels API Terms of Use and attribution/link-back requirements.",
    "self_hostable": "No; the official API is a hosted Pexels service.",
    "webhooks": "Unavailable in the official API documentation.",
    "rate_limit": "Default limit: 200 requests per hour and 20,000 requests per month; limits may be increased by Pexels.",
    "free_tier_reset": "Monthly request allowance resets monthly; the documentation also specifies an hourly limit.",
    "uses": [
      "image search/retrieval",
      "image metadata",
      "transformation/optimization",
      "OCR or image analysis where offered",
      "media delivery"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.pexels.com/api/",
      "source_1": "https://www.pexels.com/api/documentation/",
      "source_2": "https://www.pexels.com/api/documentation/",
      "source_3": "https://www.pexels.com/api/documentation/"
    }
  },
  {
    "name": "Pixabay API",
    "category": "Images / Media",
    "description": "Cataloged API provider.",
    "signup_url": "https://pixabay.com/api/docs/",
    "pricing_url": "https://pixabay.com/api/docs/",
    "documentation_url": "https://pixabay.com/api/docs/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No card requirement is stated in the official API documentation.",
    "authentication": "API key passed as the `key` query parameter.",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [],
    "commercial_use": "Unavailable from the official API documentation; Pixabay's separate Content License permits commercial use subject to its restrictions.",
    "self_hostable": "No; the documented API is hosted by Pixabay.",
    "webhooks": "Unavailable in the official API documentation.",
    "rate_limit": "Up to 100 requests per 60 seconds; requests are limited by IP address.",
    "free_tier_reset": "Every 60 seconds.",
    "uses": [
      "image search/retrieval",
      "image metadata",
      "transformation/optimization",
      "OCR or image analysis where offered",
      "media delivery"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://pixabay.com/api/docs/",
      "source_1": "https://pixabay.com/api/docs/",
      "source_2": "https://pixabay.com/api/docs/",
      "source_3": "https://pixabay.com/api/docs/"
    }
  },
  {
    "name": "remove.bg",
    "category": "Images / Media",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.remove.bg/api",
    "pricing_url": "https://www.remove.bg/pricing",
    "documentation_url": "https://www.remove.bg/api",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No card is required for the free API credits; card/payment is required when purchasing additional credits.",
    "authentication": "API key in the `X-Api-Key` HTTP header.",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [
      "Python",
      "Node.js",
      "PHP",
      "Java",
      "C#"
    ],
    "commercial_use": "Permitted under the remove.bg terms and applicable paid/free-plan restrictions.",
    "self_hostable": "No; remove.bg documents a hosted API.",
    "webhooks": "Unavailable in the official API reference.",
    "rate_limit": "Unavailable as a single published API-wide limit; account and plan limits apply.",
    "free_tier_reset": "Free credits are granted monthly; the precise reset details are plan/account dependent.",
    "uses": [
      "image search/retrieval",
      "image metadata",
      "transformation/optimization",
      "OCR or image analysis where offered",
      "media delivery"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.remove.bg/api",
      "source_1": "https://www.remove.bg/pricing",
      "source_2": "https://www.remove.bg/api",
      "source_3": "https://www.remove.bg/api"
    }
  },
  {
    "name": "TinyPNG API",
    "category": "Images / Media",
    "description": "Cataloged API provider.",
    "signup_url": "https://tinypng.com/developers",
    "pricing_url": "https://tinypng.com/developers#pricing",
    "documentation_url": "https://tinypng.com/developers",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No card is required for the free developer account; payment details are needed for paid usage.",
    "authentication": "API key supplied as HTTP Basic authentication username; password is blank.",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [
      "PHP",
      "Node.js",
      "Ruby",
      "Python",
      "Java",
      ".NET"
    ],
    "commercial_use": "Permitted under the TinyPNG developer terms and paid-plan terms.",
    "self_hostable": "No; the documented API is hosted by Tinify/TinyPNG.",
    "webhooks": "Unavailable in the official developer documentation.",
    "rate_limit": "500 free compressions per calendar month; paid usage is metered per compression rather than a published request-rate limit.",
    "free_tier_reset": "Monthly (500 compressions per calendar month).",
    "uses": [
      "image search/retrieval",
      "image metadata",
      "transformation/optimization",
      "OCR or image analysis where offered",
      "media delivery"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://tinypng.com/developers",
      "source_1": "https://tinypng.com/developers#pricing",
      "source_2": "https://tinypng.com/developers/reference",
      "source_3": "https://tinypng.com/developers/reference"
    }
  },
  {
    "name": "Unsplash API",
    "category": "Images / Media",
    "description": "Cataloged API provider.",
    "signup_url": "https://unsplash.com/developers",
    "pricing_url": "https://unsplash.com/developers",
    "documentation_url": "https://unsplash.com/developers",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No card requirement is stated for API application/registration.",
    "authentication": "OAuth 2.0 or an application access key; the access key is sent in the `Authorization: Client-ID` header.",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON",
      "OAuth 2.0"
    ],
    "sdk_languages": [],
    "commercial_use": "Permitted subject to the Unsplash API Terms and API Guidelines; applications must comply with attribution and hotlinking requirements.",
    "self_hostable": "No; the official API is a hosted Unsplash service.",
    "webhooks": "Unavailable in the official API documentation.",
    "rate_limit": "Demo applications: 50 requests per hour. Production applications: 5,000 requests per hour.",
    "free_tier_reset": "Hourly.",
    "uses": [
      "image search/retrieval",
      "image metadata",
      "transformation/optimization",
      "OCR or image analysis where offered",
      "media delivery"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://unsplash.com/developers",
      "source_1": "https://unsplash.com/developers",
      "source_2": "https://unsplash.com/documentation#creating-a-developer-account",
      "source_3": "https://unsplash.com/documentation"
    }
  },
  {
    "name": "500px API",
    "category": "Images / Media (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://500px.com/p/api",
    "pricing_url": "https://500px.com/p/api#pricing",
    "documentation_url": "https://github.com/500px/500px-api-docs",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "image search/retrieval",
      "image metadata",
      "transformation/optimization",
      "OCR or image analysis where offered",
      "media delivery"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://github.com/500px/500px-api-docs",
      "source_1": "https://github.com/500px/500px-api-docs",
      "source_2": "https://github.com/500px/500px-api-docs",
      "source_3": "https://github.com/500px/500px-api-docs"
    }
  },
  {
    "name": "Adobe Stock API",
    "category": "Images / Media (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://developer.adobe.com/stock/",
    "pricing_url": "https://stock.adobe.com/plans",
    "documentation_url": "https://developer.adobe.com/stock/docs/api/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key (x-api-key); OAuth 2.0 access token for user-authorized operations",
    "protocols": [
      "HTTPS",
      "REST"
    ],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "image search/retrieval",
      "image metadata",
      "transformation/optimization",
      "OCR or image analysis where offered",
      "media delivery"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://developer.adobe.com/stock/docs/api/",
      "source_1": "https://developer.adobe.com/stock/docs/api/",
      "source_2": "https://developer.adobe.com/stock/docs/api/",
      "source_3": "https://developer.adobe.com/stock/docs/api/"
    }
  },
  {
    "name": "DeepAI",
    "category": "Images / Media (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://deepai.org",
    "pricing_url": "https://deepai.org/pricing",
    "documentation_url": "https://deepai.org/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key in the api-key header",
    "protocols": [
      "HTTPS",
      "REST"
    ],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "image search/retrieval",
      "image metadata",
      "transformation/optimization",
      "OCR or image analysis where offered",
      "media delivery"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://deepai.org/pricing",
      "source_1": "https://deepai.org/machine-learning-models",
      "source_2": "https://deepai.org/machine-learning-models",
      "source_3": "https://deepai.org/machine-learning-models"
    }
  },
  {
    "name": "Flickr API",
    "category": "Images / Media (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.flickr.com/services/api/",
    "pricing_url": "https://www.flickr.com/services/api/#pricing",
    "documentation_url": "https://www.flickr.com/services/api/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key; OAuth 1.0a for authenticated calls",
    "protocols": [
      "HTTPS",
      "REST",
      "XML-RPC",
      "SOAP"
    ],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "3600 requests per hour per API key",
    "free_tier_reset": "Hourly",
    "uses": [
      "image search/retrieval",
      "image metadata",
      "transformation/optimization",
      "OCR or image analysis where offered",
      "media delivery"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.flickr.com/services/api/",
      "source_1": "https://www.flickr.com/services/api/auth.oauth.html",
      "source_2": "https://www.flickr.com/services/api/",
      "source_3": "https://www.flickr.com/services/api/"
    }
  },
  {
    "name": "Getty Images API",
    "category": "Images / Media (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://developers.gettyimages.com",
    "pricing_url": "https://www.gettyimages.com/plans-and-pricing",
    "documentation_url": "https://developers.gettyimages.com/api-docs/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "OAuth 2.0 client credentials",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "image search/retrieval",
      "image metadata",
      "transformation/optimization",
      "OCR or image analysis where offered",
      "media delivery"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://developers.gettyimages.com/api-docs/",
      "source_1": "https://developers.gettyimages.com/api-docs/",
      "source_2": "https://developers.gettyimages.com/api-docs/",
      "source_3": "https://developers.gettyimages.com/api-docs/"
    }
  },
  {
    "name": "Imagga",
    "category": "Images / Media (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://imagga.com",
    "pricing_url": "https://imagga.com/pricing.html",
    "documentation_url": "https://docs.imagga.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key and API secret",
    "protocols": [
      "HTTPS"
    ],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "image search/retrieval",
      "image metadata",
      "transformation/optimization",
      "OCR or image analysis where offered",
      "media delivery"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://docs.imagga.com/",
      "source_1": "https://imagga.com/pricing.html",
      "source_2": "https://docs.imagga.com/",
      "source_3": "https://docs.imagga.com/"
    }
  },
  {
    "name": "OCR.space",
    "category": "Images / Media (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://ocr.space/ocrapi",
    "pricing_url": "https://ocr.space/ocrapi",
    "documentation_url": "https://ocr.space/ocrapi",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No",
    "authentication": "API key (apikey request parameter or X-API-Key header)",
    "protocols": [
      "HTTPS"
    ],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Free API: 500 requests per day per IP address",
    "free_tier_reset": "Daily",
    "uses": [
      "image search/retrieval",
      "image metadata",
      "transformation/optimization",
      "OCR or image analysis where offered",
      "media delivery"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://ocr.space/ocrapi",
      "source_1": "https://ocr.space/ocrapi",
      "source_2": "https://ocr.space/ocrapi",
      "source_3": "https://ocr.space/ocrapi"
    }
  },
  {
    "name": "Shutterstock API",
    "category": "Images / Media (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://developer.shutterstock.com",
    "pricing_url": "https://www.shutterstock.com/developer/api",
    "documentation_url": "https://developer.shutterstock.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "OAuth 2.0",
    "protocols": [
      "HTTPS"
    ],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "No",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "image search/retrieval",
      "image metadata",
      "transformation/optimization",
      "OCR or image analysis where offered",
      "media delivery"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://developer.shutterstock.com/",
      "source_1": "https://www.shutterstock.com/developer/api",
      "source_2": "https://api-reference.shutterstock.com/",
      "source_3": "https://api-reference.shutterstock.com/"
    }
  },
  {
    "name": "Blynk API",
    "category": "IoT",
    "description": "Cataloged API provider.",
    "signup_url": "https://blynk.io",
    "pricing_url": "https://blynk.io/pricing",
    "documentation_url": "https://docs.blynk.io/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Blynk token",
    "protocols": [
      "HTTPS",
      "MQTT"
    ],
    "sdk_languages": [
      "C++",
      "C",
      "MicroPython"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Webhooks",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "data retrieval",
      "search/query operations",
      "resource management where supported",
      "application integrations",
      "automation workflows",
      "developer applications"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://docs.blynk.io/",
      "source_1": "https://blynk.io/pricing",
      "source_2": "https://docs.blynk.io/en/blynk.cloud/device-https-api",
      "source_3": "https://docs.blynk.io/en/blynk.cloud/device-https-api"
    }
  },
  {
    "name": "Particle.io API",
    "category": "IoT",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.particle.io",
    "pricing_url": "https://www.particle.io/pricing/",
    "documentation_url": "https://docs.particle.io/reference/cloud-apis/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Bearer access token",
    "protocols": [
      "HTTPS"
    ],
    "sdk_languages": [
      "C++",
      "JavaScript",
      "Python"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Webhooks",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "data retrieval",
      "search/query operations",
      "resource management where supported",
      "application integrations",
      "automation workflows",
      "developer applications"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://docs.particle.io/reference/cloud-apis/",
      "source_1": "https://www.particle.io/pricing/",
      "source_2": "https://docs.particle.io/reference/cloud-apis/",
      "source_3": "https://docs.particle.io/reference/cloud-apis/"
    }
  },
  {
    "name": "ThingSpeak API",
    "category": "IoT",
    "description": "Cataloged API provider.",
    "signup_url": "https://thingspeak.com",
    "pricing_url": "https://thingspeak.com/prices/thingspeak_standard",
    "documentation_url": "https://thingspeak.com/prices/thingspeak_standard",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "data retrieval",
      "search/query operations",
      "resource management where supported",
      "application integrations",
      "automation workflows",
      "developer applications"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://thingspeak.com/prices/thingspeak_standard",
      "source_1": "https://thingspeak.com/docs/channels/read_data/",
      "source_2": "https://thingspeak.com/docs/channels/read_data/",
      "source_3": "https://thingspeak.com/docs/channels/read_data/"
    }
  },
  {
    "name": "Adzuna API",
    "category": "Jobs / Recruiting",
    "description": "Cataloged API provider.",
    "signup_url": "https://developer.adzuna.com",
    "pricing_url": "https://developer.adzuna.com#pricing",
    "documentation_url": "https://developer.adzuna.com/overview",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "job search",
      "job listings",
      "keyword/location filtering",
      "salary/employer data where offered",
      "recruiting integrations"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://developer.adzuna.com/overview",
      "source_1": "https://developer.adzuna.com/overview",
      "source_2": "https://developer.adzuna.com/overview",
      "source_3": "https://developer.adzuna.com/overview"
    }
  },
  {
    "name": "Indeed Publisher API",
    "category": "Jobs / Recruiting",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.indeed.com/publisher",
    "pricing_url": "https://www.indeed.com/publisher#pricing",
    "documentation_url": "https://opensource.indeedeng.io/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "job search",
      "job listings",
      "keyword/location filtering",
      "salary/employer data where offered",
      "recruiting integrations"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://opensource.indeedeng.io/",
      "source_1": "https://opensource.indeedeng.io/",
      "source_2": "https://opensource.indeedeng.io/",
      "source_3": "https://opensource.indeedeng.io/"
    }
  },
  {
    "name": "Jooble API",
    "category": "Jobs / Recruiting",
    "description": "Cataloged API provider.",
    "signup_url": "https://jooble.org/api/about",
    "pricing_url": "https://jooble.org/api/about#pricing",
    "documentation_url": "https://jooble.org/api/about",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "job search",
      "job listings",
      "keyword/location filtering",
      "salary/employer data where offered",
      "recruiting integrations"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://jooble.org/api/about",
      "source_1": "https://jooble.org/api/about",
      "source_2": "https://jooble.org/api/about",
      "source_3": "https://jooble.org/api/about"
    }
  },
  {
    "name": "USAJobs API",
    "category": "Jobs / Recruiting",
    "description": "Cataloged API provider.",
    "signup_url": "https://developer.usajobs.gov",
    "pricing_url": "https://developer.usajobs.gov#pricing",
    "documentation_url": "https://developer.usajobs.gov/API-Reference",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "job search",
      "job listings",
      "keyword/location filtering",
      "salary/employer data where offered",
      "recruiting integrations"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://developer.usajobs.gov/API-Reference",
      "source_1": "https://developer.usajobs.gov/API-Reference",
      "source_2": "https://developer.usajobs.gov/API-Reference",
      "source_3": "https://developer.usajobs.gov/API-Reference"
    }
  },
  {
    "name": "Abstract API (geolocation)",
    "category": "Maps / Geocoding / Location",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.abstractapi.com/api/ip-geolocation-api",
    "pricing_url": "https://www.abstractapi.com/pricing",
    "documentation_url": "https://www.abstractapi.com/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "No",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "geocoding",
      "reverse geocoding",
      "places/location search",
      "routing and directions",
      "maps/tiles",
      "address/location metadata"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.abstractapi.com/pricing",
      "source_1": "https://www.abstractapi.com/api/ip-geolocation-api",
      "source_2": "https://www.abstractapi.com/api/ip-geolocation-api",
      "source_3": "https://www.abstractapi.com/api/ip-geolocation-api"
    }
  },
  {
    "name": "Geoapify",
    "category": "Maps / Geocoding / Location",
    "description": "Cataloged API provider.",
    "signup_url": "https://myprojects.geoapify.com/register",
    "pricing_url": "https://www.geoapify.com/pricing",
    "documentation_url": "https://www.geoapify.com/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No (free plan)",
    "authentication": "API key",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [],
    "commercial_use": "Available on paid plans",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "3,000 requests per day on free plan",
    "free_tier_reset": "Daily",
    "uses": [
      "geocoding",
      "reverse geocoding",
      "places/location search",
      "routing and directions",
      "maps/tiles",
      "address/location metadata"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.geoapify.com/pricing",
      "source_1": "https://apidocs.geoapify.com/docs/geocoding/forward-geocoding/",
      "source_2": "https://apidocs.geoapify.com/",
      "source_3": "https://apidocs.geoapify.com/"
    }
  },
  {
    "name": "Google Maps Platform",
    "category": "Maps / Geocoding / Location",
    "description": "Cataloged API provider.",
    "signup_url": "https://console.cloud.google.com/google/maps-apis",
    "pricing_url": "https://developers.google.com/maps/billing-and-pricing/pricing",
    "documentation_url": "https://developers.google.com/maps/billing-and-pricing/overview",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Yes (billing account required)",
    "authentication": "API key or OAuth 2.0, depending on API",
    "protocols": [
      "HTTPS",
      "REST",
      "gRPC"
    ],
    "sdk_languages": [
      "JavaScript",
      "Android",
      "iOS",
      "Java",
      "Python",
      "Go",
      "Node.js",
      "PHP",
      "C#"
    ],
    "commercial_use": "Yes, subject to Google Maps Platform Terms of Service",
    "self_hostable": "No",
    "webhooks": "Unavailable",
    "rate_limit": "API-specific quotas; see Quotas page",
    "free_tier_reset": "Monthly",
    "uses": [
      "geocoding",
      "reverse geocoding",
      "places/location search",
      "routing and directions",
      "maps/tiles",
      "address/location metadata"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://developers.google.com/maps/billing-and-pricing/overview",
      "source_1": "https://developers.google.com/maps/api-security-best-practices",
      "source_2": "https://developers.google.com/maps/documentation",
      "source_3": "https://developers.google.com/maps/web-services/client-libraries"
    }
  },
  {
    "name": "HERE API",
    "category": "Maps / Geocoding / Location",
    "description": "Cataloged API provider.",
    "signup_url": "https://developer.here.com/sign-up",
    "pricing_url": "https://www.here.com/get-started/pricing",
    "documentation_url": "https://www.here.com/get-started/pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key or OAuth 2.0",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [
      "JavaScript",
      "Android",
      "iOS",
      "Flutter"
    ],
    "commercial_use": "Yes, subject to HERE terms and plan",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Plan-dependent",
    "free_tier_reset": "Monthly",
    "uses": [
      "geocoding",
      "reverse geocoding",
      "places/location search",
      "routing and directions",
      "maps/tiles",
      "address/location metadata"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.here.com/get-started/pricing",
      "source_1": "https://developer.here.com/documentation/identity-access-management/dev_guide/topics/platsec-app-credentials.html",
      "source_2": "https://developer.here.com/documentation/geocoding-search-api/dev_guide/index.html",
      "source_3": "https://developer.here.com/documentation"
    }
  },
  {
    "name": "ip-api.com",
    "category": "Maps / Geocoding / Location",
    "description": "Cataloged API provider.",
    "signup_url": "https://members.ip-api.com/register",
    "pricing_url": "https://ip-api.com/#pricing",
    "documentation_url": "https://ip-api.com/#pricing",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No (free endpoint)",
    "authentication": "None for free endpoint",
    "protocols": [
      "HTTP",
      "HTTPS",
      "JSON"
    ],
    "sdk_languages": [],
    "commercial_use": "No for free endpoint; commercial use requires Pro",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "45 requests per minute (free endpoint)",
    "free_tier_reset": "Every minute",
    "uses": [
      "geocoding",
      "reverse geocoding",
      "places/location search",
      "routing and directions",
      "maps/tiles",
      "address/location metadata"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://ip-api.com/#pricing",
      "source_1": "https://ip-api.com/docs/api:json",
      "source_2": "https://ip-api.com/docs/api:json",
      "source_3": "https://ip-api.com/docs/api:json"
    }
  },
  {
    "name": "IPinfo",
    "category": "Maps / Geocoding / Location",
    "description": "Cataloged API provider.",
    "signup_url": "https://ipinfo.io/signup",
    "pricing_url": "https://ipinfo.io/pricing",
    "documentation_url": "https://ipinfo.io/developers",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No card is stated as required for the free plan; signup is required.",
    "authentication": "API token (Bearer token or token query parameter, depending on endpoint).",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [
      "Go",
      "Java",
      "JavaScript",
      "Python",
      "Ruby"
    ],
    "commercial_use": "Commercial use is available on paid plans; the free plan is not presented as a commercial plan.",
    "self_hostable": "No self-hosted deployment is published; IPinfo is documented as a hosted API/service.",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Monthly (the free plan quota is described as monthly).",
    "uses": [
      "geocoding",
      "reverse geocoding",
      "places/location search",
      "routing and directions",
      "maps/tiles",
      "address/location metadata"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://ipinfo.io/developers",
      "source_1": "https://ipinfo.io/pricing",
      "source_2": "https://ipinfo.io/developers/ipinfo-api",
      "source_3": "https://ipinfo.io/developers/ipinfo-api"
    }
  },
  {
    "name": "ipstack",
    "category": "Maps / Geocoding / Location",
    "description": "Cataloged API provider.",
    "signup_url": "https://ipstack.com/product",
    "pricing_url": "https://ipstack.com/product",
    "documentation_url": "https://ipstack.com/documentation",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No credit card is stated as required for the free plan.",
    "authentication": "API access_key parameter.",
    "protocols": [
      "HTTP",
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [],
    "commercial_use": "Commercial use is available through paid plans; the free plan is described as non-commercial.",
    "self_hostable": "No; no self-hosted deployment option is published.",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Monthly (free-plan requests are described as per month).",
    "uses": [
      "geocoding",
      "reverse geocoding",
      "places/location search",
      "routing and directions",
      "maps/tiles",
      "address/location metadata"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://ipstack.com/documentation",
      "source_1": "https://ipstack.com/product",
      "source_2": "https://ipstack.com/documentation",
      "source_3": "https://ipstack.com/documentation"
    }
  },
  {
    "name": "OpenCage Geocoding",
    "category": "Maps / Geocoding / Location",
    "description": "Cataloged API provider.",
    "signup_url": "https://opencagedata.com/users/sign_up",
    "pricing_url": "https://opencagedata.com/pricing",
    "documentation_url": "https://opencagedata.com/api",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No credit card is stated as required for the free trial/development account.",
    "authentication": "API key supplied in the key query parameter.",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON",
      "JSONP"
    ],
    "sdk_languages": [],
    "commercial_use": "Commercial use is supported by paid plans; the free trial is for evaluation/development and has restrictions.",
    "self_hostable": "No self-hosted OpenCage service is published.",
    "webhooks": "Unavailable",
    "rate_limit": "Free tier: 2,500 requests per day and 1 request per second.",
    "free_tier_reset": "Daily.",
    "uses": [
      "geocoding",
      "reverse geocoding",
      "places/location search",
      "routing and directions",
      "maps/tiles",
      "address/location metadata"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://opencagedata.com/api",
      "source_1": "https://opencagedata.com/pricing",
      "source_2": "https://opencagedata.com/api",
      "source_3": "https://opencagedata.com/api"
    }
  },
  {
    "name": "Positionstack",
    "category": "Maps / Geocoding / Location",
    "description": "Cataloged API provider.",
    "signup_url": "https://positionstack.com/signup/free",
    "pricing_url": "https://positionstack.com/product",
    "documentation_url": "https://positionstack.com/documentation",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No credit card is stated as required for the free plan.",
    "authentication": "API access_key parameter.",
    "protocols": [
      "HTTP",
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [],
    "commercial_use": "Commercial use is available on paid plans; the free plan is described as non-commercial.",
    "self_hostable": "No; no self-hosted deployment option is published.",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Monthly (free-plan requests are described as per month).",
    "uses": [
      "geocoding",
      "reverse geocoding",
      "places/location search",
      "routing and directions",
      "maps/tiles",
      "address/location metadata"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://positionstack.com/documentation",
      "source_1": "https://positionstack.com/product",
      "source_2": "https://positionstack.com/documentation",
      "source_3": "https://positionstack.com/documentation"
    }
  },
  {
    "name": "TomTom Maps",
    "category": "Maps / Geocoding / Location",
    "description": "Cataloged API provider.",
    "signup_url": "https://developer.tomtom.com/user/register",
    "pricing_url": "https://developer.tomtom.com/pricing",
    "documentation_url": "https://developer.tomtom.com/maps-api/maps-api-documentation-overview",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "A credit card is not stated as required for the freemium plan; account/API-key registration is required.",
    "authentication": "API key in the key query parameter.",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [
      "JavaScript",
      "Android",
      "iOS"
    ],
    "commercial_use": "Commercial use is governed by the TomTom Developer Terms and the applicable product/pricing plan.",
    "self_hostable": "No self-hosted TomTom Maps API deployment is published.",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Daily (freemium usage is stated as daily quota).",
    "uses": [
      "geocoding",
      "reverse geocoding",
      "places/location search",
      "routing and directions",
      "maps/tiles",
      "address/location metadata"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://developer.tomtom.com/maps-api/maps-api-documentation-overview",
      "source_1": "https://developer.tomtom.com/how-to-use-tomtom-maps-api",
      "source_2": "https://developer.tomtom.com/maps-api/maps-api-documentation-overview",
      "source_3": "https://developer.tomtom.com/maps-api/maps-api-documentation-overview"
    }
  },
  {
    "name": "Bing Maps API",
    "category": "Maps / Location (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.bingmapsportal.com",
    "pricing_url": "https://www.microsoft.com/en-us/maps/licensing",
    "documentation_url": "https://www.microsoft.com/en-us/maps/bing-maps-api",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Bing Maps key",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON",
      "XML"
    ],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "No",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "geocoding",
      "reverse geocoding",
      "places/location search",
      "routing and directions",
      "maps/tiles",
      "address/location metadata"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.microsoft.com/en-us/maps/bing-maps-api",
      "source_1": "https://learn.microsoft.com/en-us/bingmaps/getting-started/bing-maps-dev-center-help/getting-a-bing-maps-key",
      "source_2": "https://learn.microsoft.com/en-us/bingmaps/rest-services/",
      "source_3": "https://learn.microsoft.com/en-us/bingmaps/sdk-native/"
    }
  },
  {
    "name": "Foursquare Places API",
    "category": "Maps / Location (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://developer.foursquare.com",
    "pricing_url": "https://foursquare.com/products/places-api",
    "documentation_url": "https://docs.foursquare.com/developer/reference/places-api-get-started",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key in the Authorization header",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "No",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "geocoding",
      "reverse geocoding",
      "places/location search",
      "routing and directions",
      "maps/tiles",
      "address/location metadata"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://docs.foursquare.com/developer/reference/places-api-get-started",
      "source_1": "https://docs.foursquare.com/developer/reference/places-api-get-started",
      "source_2": "https://docs.foursquare.com/developer/reference/places-api-get-started",
      "source_3": "https://docs.foursquare.com/developer/reference/places-api-get-started"
    }
  },
  {
    "name": "Geocodio",
    "category": "Maps / Location (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.geocod.io",
    "pricing_url": "https://www.geocod.io/pricing/",
    "documentation_url": "https://www.geocod.io/pricing/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "No",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "geocoding",
      "reverse geocoding",
      "places/location search",
      "routing and directions",
      "maps/tiles",
      "address/location metadata"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.geocod.io/pricing/",
      "source_1": "https://www.geocod.io/docs/",
      "source_2": "https://www.geocod.io/docs/",
      "source_3": "https://www.geocod.io/docs/"
    }
  },
  {
    "name": "GeoNames",
    "category": "Maps / Location (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.geonames.org/export/web-services.html",
    "pricing_url": "https://www.geonames.org/export/",
    "documentation_url": "https://www.geonames.org/export/web-services.html",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": false,
    "authentication": "Username parameter",
    "protocols": [
      "HTTP",
      "HTTPS",
      "REST",
      "XML",
      "JSON"
    ],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": true,
    "webhooks": "Unavailable",
    "rate_limit": "Free web service limited to 1000 credits per day and 2000 credits per hour per application",
    "free_tier_reset": "Daily (1000 credits per day)",
    "uses": [
      "geocoding",
      "reverse geocoding",
      "places/location search",
      "routing and directions",
      "maps/tiles",
      "address/location metadata"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.geonames.org/export/web-services.html",
      "source_1": "https://www.geonames.org/export/web-services.html",
      "source_2": "https://www.geonames.org/export/web-services.html",
      "source_3": "https://www.geonames.org/export/web-services.html"
    }
  },
  {
    "name": "Nominatim (OpenStreetMap)",
    "category": "Maps / Location (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://nominatim.org",
    "pricing_url": "https://operations.osmfoundation.org/policies/nominatim/",
    "documentation_url": "https://operations.osmfoundation.org/policies/nominatim/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": false,
    "authentication": "No authentication documented for the public service",
    "protocols": [
      "HTTP",
      "HTTPS",
      "REST",
      "JSON",
      "XML"
    ],
    "sdk_languages": [],
    "commercial_use": "Allowed subject to the public service policy requirements",
    "self_hostable": true,
    "webhooks": "Unavailable",
    "rate_limit": "Maximum 1 request per second for the public service",
    "free_tier_reset": "Unavailable",
    "uses": [
      "geocoding",
      "reverse geocoding",
      "places/location search",
      "routing and directions",
      "maps/tiles",
      "address/location metadata"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://operations.osmfoundation.org/policies/nominatim/",
      "source_1": "https://operations.osmfoundation.org/policies/nominatim/",
      "source_2": "https://nominatim.org/release-docs/latest/api/Overview/",
      "source_3": "https://nominatim.org/release-docs/latest/api/Overview/"
    }
  },
  {
    "name": "Radar.io",
    "category": "Maps / Location (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://radar.com",
    "pricing_url": "https://radar.com/pricing",
    "documentation_url": "https://radar.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the free plan; paid billing requires a payment method",
    "authentication": "API keys: publishable keys for client-side use and secret keys for server-side use",
    "protocols": [
      "HTTPS",
      "REST"
    ],
    "sdk_languages": [
      "JavaScript",
      "React Native",
      "Flutter",
      "iOS (Swift)",
      "Android (Kotlin/Java)",
      "React"
    ],
    "commercial_use": "Yes, under Radar's commercial terms and applicable plan limits",
    "self_hostable": "No; Radar is provided as a hosted cloud service",
    "webhooks": "Yes",
    "rate_limit": "100 requests per second per API key",
    "free_tier_reset": "Monthly (free plan allowance)",
    "uses": [
      "geocoding",
      "reverse geocoding",
      "places/location search",
      "routing and directions",
      "maps/tiles",
      "address/location metadata"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://radar.com/",
      "source_1": "https://radar.com/pricing",
      "source_2": "https://docs.radar.com/api",
      "source_3": "https://docs.radar.com/api"
    }
  },
  {
    "name": "SmartyStreets",
    "category": "Maps / Location (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.smarty.com",
    "pricing_url": "https://www.smartystreets.com/pricing",
    "documentation_url": "https://www.smartystreets.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No; Smarty's free trial is advertised without a credit card",
    "authentication": "API key (auth-id and auth-token) or embedded website key, depending on the product",
    "protocols": [
      "HTTPS",
      "REST"
    ],
    "sdk_languages": [
      "C#",
      "Go",
      "Java",
      "JavaScript",
      "PHP",
      "Python",
      "Ruby"
    ],
    "commercial_use": "Yes, subject to the applicable Smarty license and subscription terms",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "geocoding",
      "reverse geocoding",
      "places/location search",
      "routing and directions",
      "maps/tiles",
      "address/location metadata"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.smartystreets.com/",
      "source_1": "https://www.smartystreets.com/pricing",
      "source_2": "https://www.smartystreets.com/docs/cloud/us-street-api",
      "source_3": "https://www.smartystreets.com/docs/cloud/us-street-api"
    }
  },
  {
    "name": "Bright Data",
    "category": "Miscellaneous / Utility",
    "description": "Cataloged API provider.",
    "signup_url": "https://brightdata.com/cp/start",
    "pricing_url": "https://brightdata.com/pricing",
    "documentation_url": "https://brightdata.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API token/key authentication, depending on the Bright Data product",
    "protocols": [
      "HTTPS",
      "HTTP",
      "SOCKS5",
      "WebSocket"
    ],
    "sdk_languages": [
      "Unavailable"
    ],
    "commercial_use": "Yes, subject to Bright Data's terms and the selected product plan",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Product- and zone-dependent; no single provider-wide limit is published",
    "free_tier_reset": "Unavailable",
    "uses": [
      "data retrieval",
      "search/query operations",
      "resource management where supported",
      "application integrations",
      "automation workflows",
      "developer applications"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://brightdata.com/",
      "source_1": "https://brightdata.com/pricing",
      "source_2": "https://docs.brightdata.com/api-reference/authentication",
      "source_3": "https://docs.brightdata.com/proxy-networks/introduction"
    }
  },
  {
    "name": "Calendarific (holidays)",
    "category": "Miscellaneous / Utility",
    "description": "Cataloged API provider.",
    "signup_url": "https://calendarific.com/signup",
    "pricing_url": "https://calendarific.com/pricing",
    "documentation_url": "https://calendarific.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key supplied as the api_key query parameter",
    "protocols": [
      "HTTPS",
      "REST"
    ],
    "sdk_languages": [
      "Unavailable"
    ],
    "commercial_use": "Paid plans are available for commercial use; plan and license restrictions apply",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Plan-dependent; the official API documentation does not publish one universal request-rate limit",
    "free_tier_reset": "Monthly (the free plan is specified as a monthly request allowance)",
    "uses": [
      "data retrieval",
      "search/query operations",
      "resource management where supported",
      "application integrations",
      "automation workflows",
      "developer applications"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://calendarific.com/",
      "source_1": "https://calendarific.com/pricing",
      "source_2": "https://calendarific.com/api-documentation",
      "source_3": "https://calendarific.com/api-documentation"
    }
  },
  {
    "name": "Clearbit",
    "category": "Miscellaneous / Utility",
    "description": "Cataloged API provider.",
    "signup_url": "https://dashboard.clearbit.com/signup",
    "pricing_url": "https://clearbit.com/pricing",
    "documentation_url": "https://clearbit.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key via HTTP Basic Authentication",
    "protocols": [
      "HTTPS",
      "REST"
    ],
    "sdk_languages": [
      "Unavailable"
    ],
    "commercial_use": "Subject to Clearbit's applicable terms; current commercial-plan availability is Unavailable",
    "self_hostable": "No; Clearbit APIs are hosted services",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "data retrieval",
      "search/query operations",
      "resource management where supported",
      "application integrations",
      "automation workflows",
      "developer applications"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://clearbit.com/",
      "source_1": "https://clearbit.com/pricing",
      "source_2": "https://dashboard.clearbit.com/docs",
      "source_3": "https://dashboard.clearbit.com/docs"
    }
  },
  {
    "name": "Diffbot",
    "category": "Miscellaneous / Utility",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.diffbot.com/plans/trial/",
    "pricing_url": "https://www.diffbot.com/pricing/",
    "documentation_url": "https://www.diffbot.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API token (sent as the token query parameter)",
    "protocols": [
      "HTTPS REST API"
    ],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "data retrieval",
      "search/query operations",
      "resource management where supported",
      "application integrations",
      "automation workflows",
      "developer applications"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.diffbot.com/",
      "source_1": "https://www.diffbot.com/pricing/",
      "source_2": "https://docs.diffbot.com/reference/authentication",
      "source_3": "https://docs.diffbot.com/reference/introduction"
    }
  },
  {
    "name": "Edamam (nutrition/recipes)",
    "category": "Miscellaneous / Utility",
    "description": "Cataloged API provider.",
    "signup_url": "https://developer.edamam.com",
    "pricing_url": "https://www.edamam.com/pricing",
    "documentation_url": "https://www.edamam.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Application ID and application key",
    "protocols": [
      "HTTPS REST API"
    ],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Plan-dependent; exact current limit is not stated in the public documentation retrieved",
    "free_tier_reset": "Unavailable",
    "uses": [
      "data retrieval",
      "search/query operations",
      "resource management where supported",
      "application integrations",
      "automation workflows",
      "developer applications"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.edamam.com/",
      "source_1": "https://www.edamam.com/pricing",
      "source_2": "https://developer.edamam.com/edamam-docs-recipe-api",
      "source_3": "https://developer.edamam.com/edamam-docs-recipe-api"
    }
  },
  {
    "name": "Hunter.io",
    "category": "Miscellaneous / Utility",
    "description": "Cataloged API provider.",
    "signup_url": "https://hunter.io/users/sign_up",
    "pricing_url": "https://hunter.io/pricing",
    "documentation_url": "https://hunter.io/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the free account (paid-plan billing details are plan-dependent)",
    "authentication": "API key (api_key query parameter or Authorization Bearer token)",
    "protocols": [
      "HTTPS REST API"
    ],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "15 requests per second",
    "free_tier_reset": "Monthly (free plan credits)",
    "uses": [
      "data retrieval",
      "search/query operations",
      "resource management where supported",
      "application integrations",
      "automation workflows",
      "developer applications"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://hunter.io/",
      "source_1": "https://hunter.io/pricing",
      "source_2": "https://hunter.io/api-documentation/v2",
      "source_3": "https://hunter.io/api-documentation/v2"
    }
  },
  {
    "name": "IPQualityScore",
    "category": "Miscellaneous / Utility",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.ipqualityscore.com/create-account",
    "pricing_url": "https://www.ipqualityscore.com/pricing",
    "documentation_url": "https://www.ipqualityscore.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the free API account (paid billing is separate)",
    "authentication": "API key in the URL path",
    "protocols": [
      "HTTPS REST API"
    ],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Monthly credit allowance",
    "uses": [
      "data retrieval",
      "search/query operations",
      "resource management where supported",
      "application integrations",
      "automation workflows",
      "developer applications"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.ipqualityscore.com/",
      "source_1": "https://www.ipqualityscore.com/pricing",
      "source_2": "https://www.ipqualityscore.com/documentation/overview",
      "source_3": "https://www.ipqualityscore.com/documentation/overview"
    }
  },
  {
    "name": "JSONPlaceholder (fake data)",
    "category": "Miscellaneous / Utility",
    "description": "Cataloged API provider.",
    "signup_url": "https://jsonplaceholder.typicode.com",
    "pricing_url": "https://jsonplaceholder.typicode.com#pricing",
    "documentation_url": "https://jsonplaceholder.typicode.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": false,
    "authentication": "None",
    "protocols": [
      "HTTPS REST API"
    ],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": true,
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "data retrieval",
      "search/query operations",
      "resource management where supported",
      "application integrations",
      "automation workflows",
      "developer applications"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://jsonplaceholder.typicode.com/",
      "source_1": "https://jsonplaceholder.typicode.com/guide/",
      "source_2": "https://jsonplaceholder.typicode.com/guide/",
      "source_3": "https://jsonplaceholder.typicode.com/guide/"
    }
  },
  {
    "name": "Mockaroo",
    "category": "Miscellaneous / Utility",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.mockaroo.com/api/docs",
    "pricing_url": "https://mockaroo.com/pricing",
    "documentation_url": "https://mockaroo.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the free plan; a card is required only when subscribing to a paid plan (if applicable)",
    "authentication": "API key",
    "protocols": [
      "HTTPS",
      "REST/JSON"
    ],
    "sdk_languages": [],
    "commercial_use": "Permitted under the applicable Mockaroo terms; plan limits and terms apply",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Free API access is limited to 200 API requests per day",
    "free_tier_reset": "Daily",
    "uses": [
      "data retrieval",
      "search/query operations",
      "resource management where supported",
      "application integrations",
      "automation workflows",
      "developer applications"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://mockaroo.com/",
      "source_1": "https://mockaroo.com/pricing",
      "source_2": "https://mockaroo.com/api/docs",
      "source_3": "https://mockaroo.com/api/docs"
    }
  },
  {
    "name": "Nutritionix API",
    "category": "Miscellaneous / Utility",
    "description": "Cataloged API provider.",
    "signup_url": "https://developer.nutritionix.com",
    "pricing_url": "https://www.nutritionix.com/business/api",
    "documentation_url": "https://www.nutritionix.com/business/api",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the published free developer access; paid/commercial access is subject to Nutritionix approval and terms",
    "authentication": "Application ID (x-app-id) and application key (x-app-key) headers",
    "protocols": [
      "HTTPS",
      "REST/JSON"
    ],
    "sdk_languages": [],
    "commercial_use": "Commercial use requires a commercial agreement/license from Nutritionix",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "The published developer plan is limited to 1,000 API calls per day",
    "free_tier_reset": "Daily",
    "uses": [
      "data retrieval",
      "search/query operations",
      "resource management where supported",
      "application integrations",
      "automation workflows",
      "developer applications"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.nutritionix.com/business/api",
      "source_1": "https://www.nutritionix.com/business/api",
      "source_2": "https://docx.syndigo.com/developers/nutritionix-api",
      "source_3": "https://docx.syndigo.com/developers/nutritionix-api"
    }
  },
  {
    "name": "PokéAPI",
    "category": "Miscellaneous / Utility",
    "description": "Cataloged API provider.",
    "signup_url": "https://pokeapi.co",
    "pricing_url": "https://pokeapi.co/",
    "documentation_url": "https://pokeapi.co/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": false,
    "authentication": "None",
    "protocols": [
      "HTTPS",
      "REST/JSON"
    ],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Yes; the project publishes source code and a downloadable dump",
    "webhooks": "Unavailable",
    "rate_limit": "No more than 100 requests per second from an IP address",
    "free_tier_reset": "Unavailable",
    "uses": [
      "data retrieval",
      "search/query operations",
      "resource management where supported",
      "application integrations",
      "automation workflows",
      "developer applications"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://pokeapi.co/",
      "source_1": "https://pokeapi.co/docs/v2",
      "source_2": "https://pokeapi.co/docs/v2",
      "source_3": "https://pokeapi.co/docs/v2"
    }
  },
  {
    "name": "QR Code API (goqr.me)",
    "category": "Miscellaneous / Utility",
    "description": "Cataloged API provider.",
    "signup_url": "https://goqr.me/api/",
    "pricing_url": "https://goqr.me/api/",
    "documentation_url": "https://goqr.me/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": false,
    "authentication": "None",
    "protocols": [
      "HTTP",
      "HTTPS",
      "GET",
      "POST"
    ],
    "sdk_languages": [],
    "commercial_use": "Yes; the API is published as free for commercial and non-commercial use, subject to its terms and fair-use requirements",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "No numeric rate limit is published; fair-use restrictions apply",
    "free_tier_reset": "Unavailable",
    "uses": [
      "data retrieval",
      "search/query operations",
      "resource management where supported",
      "application integrations",
      "automation workflows",
      "developer applications"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://goqr.me/",
      "source_1": "https://goqr.me/api/",
      "source_2": "https://goqr.me/api/",
      "source_3": "https://goqr.me/api/"
    }
  },
  {
    "name": "RandomUser.me",
    "category": "Miscellaneous / Utility",
    "description": "Cataloged API provider.",
    "signup_url": "https://randomuser.me/documentation",
    "pricing_url": "https://randomuser.me/",
    "documentation_url": "https://randomuser.me/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": false,
    "authentication": "None",
    "protocols": [
      "HTTPS",
      "REST/JSON"
    ],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Yes; the provider publishes the Random User Generator project as open source",
    "webhooks": "Unavailable",
    "rate_limit": "The API documentation states a limit of 1,000 requests per hour per IP address",
    "free_tier_reset": "Hourly",
    "uses": [
      "data retrieval",
      "search/query operations",
      "resource management where supported",
      "application integrations",
      "automation workflows",
      "developer applications"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://randomuser.me/",
      "source_1": "https://randomuser.me/documentation",
      "source_2": "https://randomuser.me/documentation",
      "source_3": "https://randomuser.me/documentation"
    }
  },
  {
    "name": "ScraperAPI",
    "category": "Miscellaneous / Utility",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.scraperapi.com/signup",
    "pricing_url": "https://www.scraperapi.com/pricing/",
    "documentation_url": "https://www.scraperapi.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the free trial; paid subscription requires billing information",
    "authentication": "API key passed as the api_key query parameter",
    "protocols": [
      "HTTPS"
    ],
    "sdk_languages": [
      "Python",
      "JavaScript",
      "PHP",
      "Ruby",
      "Java",
      "C#"
    ],
    "commercial_use": true,
    "self_hostable": false,
    "webhooks": "Unavailable",
    "rate_limit": "Plan-dependent concurrency and monthly request limits; exact limit depends on plan",
    "free_tier_reset": "Monthly (free plan has a monthly request allowance)",
    "uses": [
      "data retrieval",
      "search/query operations",
      "resource management where supported",
      "application integrations",
      "automation workflows",
      "developer applications"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.scraperapi.com/",
      "source_1": "https://www.scraperapi.com/pricing/",
      "source_2": "https://www.scraperapi.com/documentation/",
      "source_3": "https://www.scraperapi.com/documentation/"
    }
  },
  {
    "name": "Spoonacular (recipes)",
    "category": "Miscellaneous / Utility",
    "description": "Cataloged API provider.",
    "signup_url": "https://spoonacular.com/food-api",
    "pricing_url": "https://spoonacular.com/food-api/pricing",
    "documentation_url": "https://spoonacular.com/food-api",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the free daily quota; paid plans require a subscription",
    "authentication": "API key supplied as the apiKey query parameter or x-api-key header",
    "protocols": [
      "HTTPS",
      "REST"
    ],
    "sdk_languages": [
      "JavaScript",
      "Python",
      "PHP",
      "Java",
      "Swift",
      "Kotlin"
    ],
    "commercial_use": "Paid plans are available for commercial use; plan terms apply",
    "self_hostable": false,
    "webhooks": "Unavailable",
    "rate_limit": "Quota is measured in points; requests consume points according to endpoint cost and plan",
    "free_tier_reset": "Daily",
    "uses": [
      "data retrieval",
      "search/query operations",
      "resource management where supported",
      "application integrations",
      "automation workflows",
      "developer applications"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://spoonacular.com/food-api",
      "source_1": "https://spoonacular.com/food-api/pricing",
      "source_2": "https://spoonacular.com/food-api/docs#Authentication",
      "source_3": "https://spoonacular.com/food-api/docs"
    }
  },
  {
    "name": "Wolfram Alpha API",
    "category": "Miscellaneous / Utility",
    "description": "Cataloged API provider.",
    "signup_url": "https://developer.wolframalpha.com",
    "pricing_url": "https://products.wolframalpha.com/api/",
    "documentation_url": "https://www.wolframalpha.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the published free developer allowance; commercial access is paid",
    "authentication": "AppID parameter identifying the application",
    "protocols": [
      "HTTPS",
      "REST"
    ],
    "sdk_languages": [
      "Python",
      "JavaScript",
      "PHP",
      "Java",
      "Ruby",
      "C#"
    ],
    "commercial_use": "Commercial use requires an appropriate commercial license",
    "self_hostable": false,
    "webhooks": "Unavailable",
    "rate_limit": "Application-plan dependent query and rate limits",
    "free_tier_reset": "Monthly allowance for the free developer plan",
    "uses": [
      "data retrieval",
      "search/query operations",
      "resource management where supported",
      "application integrations",
      "automation workflows",
      "developer applications"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.wolframalpha.com/",
      "source_1": "https://developer.wolframalpha.com/portal/apis/",
      "source_2": "https://developer.wolframalpha.com/portal/apis/",
      "source_3": "https://developer.wolframalpha.com/portal/apis/"
    }
  },
  {
    "name": "ZeroBounce",
    "category": "Miscellaneous / Utility",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.zerobounce.net/members/register",
    "pricing_url": "https://www.zerobounce.net/pricing.html",
    "documentation_url": "https://www.zerobounce.net/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the free credits; paid usage requires payment details",
    "authentication": "API key",
    "protocols": [
      "HTTPS",
      "REST"
    ],
    "sdk_languages": [
      "C#",
      "Java",
      "PHP",
      "Python",
      "Ruby",
      "Node.js"
    ],
    "commercial_use": true,
    "self_hostable": false,
    "webhooks": "Unavailable",
    "rate_limit": "API limits are documented as endpoint/account dependent; exact limit is not universally published",
    "free_tier_reset": "Free credits are granted as specified by the current offer; recurring reset is Unavailable",
    "uses": [
      "data retrieval",
      "search/query operations",
      "resource management where supported",
      "application integrations",
      "automation workflows",
      "developer applications"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.zerobounce.net/",
      "source_1": "https://www.zerobounce.net/pricing.html",
      "source_2": "https://www.zerobounce.net/email-validation-api.html",
      "source_3": "https://www.zerobounce.net/email-validation-api.html"
    }
  },
  {
    "name": "Zippopotam.us (zip codes)",
    "category": "Miscellaneous / Utility",
    "description": "Cataloged API provider.",
    "signup_url": "https://zippopotam.us",
    "pricing_url": "https://zippopotam.us#pricing",
    "documentation_url": "https://api.zippopotam.us/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": false,
    "authentication": "None",
    "protocols": [
      "HTTPS",
      "REST"
    ],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": false,
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "data retrieval",
      "search/query operations",
      "resource management where supported",
      "application integrations",
      "automation workflows",
      "developer applications"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://api.zippopotam.us/",
      "source_1": "https://api.zippopotam.us/",
      "source_2": "https://api.zippopotam.us/",
      "source_3": "https://api.zippopotam.us/"
    }
  },
  {
    "name": "Discogs API",
    "category": "Music / Entertainment",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.discogs.com/settings/developers",
    "pricing_url": "https://www.discogs.com/developers",
    "documentation_url": "https://www.discogs.com/developers",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "OAuth 1.0a or personal access token; API key/secret credentials are documented.",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [
      "Unavailable"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "60 requests per minute for authenticated requests; 25 requests per minute for unauthenticated requests.",
    "free_tier_reset": "1 minute",
    "uses": [
      "media search",
      "artist/title metadata",
      "albums/tracks/movies/games depending on provider",
      "playlists/collections where offered",
      "ratings/discovery"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.discogs.com/developers",
      "source_1": "https://www.discogs.com/developers#page:authentication",
      "source_2": "https://www.discogs.com/developers#page:authentication",
      "source_3": "https://www.discogs.com/developers"
    }
  },
  {
    "name": "Genius API",
    "category": "Music / Entertainment",
    "description": "Cataloged API provider.",
    "signup_url": "https://genius.com/api-clients",
    "pricing_url": "https://docs.genius.com/",
    "documentation_url": "https://docs.genius.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Bearer access token in the Authorization header.",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [
      "Unavailable"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "media search",
      "artist/title metadata",
      "albums/tracks/movies/games depending on provider",
      "playlists/collections where offered",
      "ratings/discovery"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://docs.genius.com/",
      "source_1": "https://docs.genius.com/",
      "source_2": "https://docs.genius.com/",
      "source_3": "https://docs.genius.com/"
    }
  },
  {
    "name": "IGDB (games)",
    "category": "Music / Entertainment",
    "description": "Cataloged API provider.",
    "signup_url": "https://api-docs.igdb.com",
    "pricing_url": "https://api-docs.igdb.com/",
    "documentation_url": "https://api-docs.igdb.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Twitch OAuth 2.0 application access token, with a Twitch client ID.",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON",
      "Apicalypse query language"
    ],
    "sdk_languages": [
      "Unavailable"
    ],
    "commercial_use": "Commercial use requires contacting IGDB; the documented free API access is for non-commercial use.",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "4 requests per second per client.",
    "free_tier_reset": "1 second",
    "uses": [
      "media search",
      "artist/title metadata",
      "albums/tracks/movies/games depending on provider",
      "playlists/collections where offered",
      "ratings/discovery"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://api-docs.igdb.com/",
      "source_1": "https://api-docs.igdb.com/#getting-started",
      "source_2": "https://api-docs.igdb.com/#authentication",
      "source_3": "https://api-docs.igdb.com/#getting-started"
    }
  },
  {
    "name": "Last.fm API",
    "category": "Music / Entertainment",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.last.fm/api/account/create",
    "pricing_url": "https://www.last.fm/api",
    "documentation_url": "https://www.last.fm/api",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No",
    "authentication": "API key for read requests; some methods additionally require a shared secret and user authentication/session key.",
    "protocols": [
      "HTTPS",
      "REST",
      "XML",
      "JSON"
    ],
    "sdk_languages": [
      "Unavailable"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "5 requests per second; requests over the limit receive HTTP 429.",
    "free_tier_reset": "1 second",
    "uses": [
      "media search",
      "artist/title metadata",
      "albums/tracks/movies/games depending on provider",
      "playlists/collections where offered",
      "ratings/discovery"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.last.fm/api",
      "source_1": "https://www.last.fm/api/account/create",
      "source_2": "https://www.last.fm/api/authentication",
      "source_3": "https://www.last.fm/api"
    }
  },
  {
    "name": "OMDb API",
    "category": "Music / Entertainment",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.omdbapi.com/apikey.aspx",
    "pricing_url": "https://www.omdbapi.com/",
    "documentation_url": "https://www.omdbapi.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the free API key; paid plans are available through Patreon.",
    "authentication": "API key supplied as the `apikey` query parameter.",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON",
      "XML"
    ],
    "sdk_languages": [
      "Unavailable"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Free keys are limited to 1,000 requests per day; paid plans have plan-specific limits.",
    "free_tier_reset": "Daily (1,000 requests per day)",
    "uses": [
      "media search",
      "artist/title metadata",
      "albums/tracks/movies/games depending on provider",
      "playlists/collections where offered",
      "ratings/discovery"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.omdbapi.com/",
      "source_1": "https://www.omdbapi.com/",
      "source_2": "https://www.omdbapi.com/",
      "source_3": "https://www.omdbapi.com/"
    }
  },
  {
    "name": "RAWG (video games)",
    "category": "Music / Entertainment",
    "description": "Cataloged API provider.",
    "signup_url": "https://rawg.io/apidocs",
    "pricing_url": "https://rawg.io/apidocs",
    "documentation_url": "https://rawg.io/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key (the key is supplied as the `key` query parameter)",
    "protocols": [
      "HTTPS",
      "REST"
    ],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "20,000 requests per month for the free API key; other limits may apply by plan",
    "free_tier_reset": "Monthly",
    "uses": [
      "media search",
      "artist/title metadata",
      "albums/tracks/movies/games depending on provider",
      "playlists/collections where offered",
      "ratings/discovery"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://rawg.io/",
      "source_1": "https://rawg.io/apidocs",
      "source_2": "https://rawg.io/apidocs",
      "source_3": "https://rawg.io/apidocs"
    }
  },
  {
    "name": "Spotify Web API",
    "category": "Music / Entertainment",
    "description": "Cataloged API provider.",
    "signup_url": "https://developer.spotify.com/dashboard",
    "pricing_url": "https://developer.spotify.com/terms",
    "documentation_url": "https://developer.spotify.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "OAuth 2.0 authorization or client-credentials flow; access tokens are bearer tokens",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [
      "JavaScript"
    ],
    "commercial_use": "Subject to Spotify Developer Terms and applicable product restrictions; commercial use is not generally unrestricted",
    "self_hostable": false,
    "webhooks": "Unavailable",
    "rate_limit": "Rate limit is calculated over a rolling 30-second window; the response may include Retry-After when rate limited",
    "free_tier_reset": "No separate free-tier reset published; rolling 30-second window applies",
    "uses": [
      "media search",
      "artist/title metadata",
      "albums/tracks/movies/games depending on provider",
      "playlists/collections where offered",
      "ratings/discovery"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://developer.spotify.com/",
      "source_1": "https://developer.spotify.com/documentation/web-api/concepts/apps",
      "source_2": "https://developer.spotify.com/documentation/web-api/concepts/authorization",
      "source_3": "https://developer.spotify.com/documentation/web-api"
    }
  },
  {
    "name": "TMDB (movies)",
    "category": "Music / Entertainment",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.themoviedb.org/settings/api",
    "pricing_url": "https://developer.themoviedb.org/docs/faq",
    "documentation_url": "https://www.themoviedb.org/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key or Bearer access token",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [],
    "commercial_use": "Free for non-commercial use with attribution; commercial use requires contacting TMDB",
    "self_hostable": false,
    "webhooks": "Unavailable",
    "rate_limit": "TMDB documents an upper limit of 40 requests per 10 seconds (subject to change)",
    "free_tier_reset": "Unavailable",
    "uses": [
      "media search",
      "artist/title metadata",
      "albums/tracks/movies/games depending on provider",
      "playlists/collections where offered",
      "ratings/discovery"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.themoviedb.org/",
      "source_1": "https://developer.themoviedb.org/docs/getting-started",
      "source_2": "https://developer.themoviedb.org/docs/authentication-application",
      "source_3": "https://developer.themoviedb.org/docs/getting-started"
    }
  },
  {
    "name": "Apple Music API",
    "category": "Music / Entertainment (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://developer.apple.com/musickit/",
    "pricing_url": "https://developer.apple.com/programs/whats-included/",
    "documentation_url": "https://developer.apple.com/apple-music/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Developer token (JWT) in the Authorization header; user token is additionally required for user-specific requests",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [
      "Swift",
      "Objective-C"
    ],
    "commercial_use": "Subject to Apple Developer Program License Agreement and Apple Music API terms",
    "self_hostable": false,
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "media search",
      "artist/title metadata",
      "albums/tracks/movies/games depending on provider",
      "playlists/collections where offered",
      "ratings/discovery"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://developer.apple.com/apple-music/",
      "source_1": "https://developer.apple.com/programs/enroll/",
      "source_2": "https://developer.apple.com/documentation/applemusicapi/using-web-services-with-apple-music",
      "source_3": "https://developer.apple.com/documentation/applemusicapi"
    }
  },
  {
    "name": "Deezer API",
    "category": "Music / Entertainment (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://developers.deezer.com",
    "pricing_url": "https://developers.deezer.com/",
    "documentation_url": "https://www.deezer.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "OAuth 2.0 for user-authorized access; public resources may be queried without a user token",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": false,
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "media search",
      "artist/title metadata",
      "albums/tracks/movies/games depending on provider",
      "playlists/collections where offered",
      "ratings/discovery"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.deezer.com/",
      "source_1": "https://developers.deezer.com/api",
      "source_2": "https://developers.deezer.com/api/oauth",
      "source_3": "https://developers.deezer.com/api"
    }
  },
  {
    "name": "Jamendo API",
    "category": "Music / Entertainment (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://developer.jamendo.com",
    "pricing_url": "https://www.jamendo.com/start",
    "documentation_url": "https://developer.jamendo.com/v3.0",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No credit card is required for API access; exact current signup requirement is Unavailable",
    "authentication": "client_id parameter (application ID); OAuth 2.0 is documented for user-authorized actions",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON",
      "JSONP"
    ],
    "sdk_languages": [],
    "commercial_use": "Commercial use is governed by the applicable Jamendo licensing terms; exact API commercial-use permission is Unavailable",
    "self_hostable": "No official self-hosting option is documented",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "media search",
      "artist/title metadata",
      "albums/tracks/movies/games depending on provider",
      "playlists/collections where offered",
      "ratings/discovery"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://developer.jamendo.com/v3.0",
      "source_1": "https://developer.jamendo.com/v3.0",
      "source_2": "https://developer.jamendo.com/v3.0",
      "source_3": "https://developer.jamendo.com/v3.0"
    }
  },
  {
    "name": "Musixmatch API",
    "category": "Music / Entertainment (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://developer.musixmatch.com",
    "pricing_url": "https://developer.musixmatch.com/pricing",
    "documentation_url": "https://developer.musixmatch.com/documentation",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No credit card requirement is published in the official API documentation; exact current requirement is Unavailable",
    "authentication": "API key supplied as the apikey parameter",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON",
      "JSONP"
    ],
    "sdk_languages": [],
    "commercial_use": "Commercial use is subject to Musixmatch API terms and licensing; exact permission is Unavailable",
    "self_hostable": "No official self-hosting option is documented",
    "webhooks": "Unavailable",
    "rate_limit": "The official documentation describes a quota/rate limit for API calls, but the current numeric limit is Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "media search",
      "artist/title metadata",
      "albums/tracks/movies/games depending on provider",
      "playlists/collections where offered",
      "ratings/discovery"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://developer.musixmatch.com/documentation",
      "source_1": "https://developer.musixmatch.com/documentation",
      "source_2": "https://developer.musixmatch.com/documentation",
      "source_3": "https://developer.musixmatch.com/documentation"
    }
  },
  {
    "name": "SoundCloud API",
    "category": "Music / Entertainment (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://developers.soundcloud.com",
    "pricing_url": "https://developers.soundcloud.com/docs/api/rate-limits",
    "documentation_url": "https://developers.soundcloud.com/docs/api/guide",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No credit card requirement is stated for API registration; exact current requirement is Unavailable",
    "authentication": "OAuth 2.1 authorization-code flow and client credentials for requests that do not require a user",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON",
      "OAuth 2.1"
    ],
    "sdk_languages": [],
    "commercial_use": "Commercial use is subject to SoundCloud API Terms of Use and developer policies; exact permission is Unavailable",
    "self_hostable": "No official self-hosting option is documented",
    "webhooks": "SoundCloud documents webhooks for selected resource events",
    "rate_limit": "The API uses a limit of 15,000 requests per 24-hour period for registered applications",
    "free_tier_reset": "24 hours (the documented request limit is a rolling 24-hour period)",
    "uses": [
      "media search",
      "artist/title metadata",
      "albums/tracks/movies/games depending on provider",
      "playlists/collections where offered",
      "ratings/discovery"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://developers.soundcloud.com/docs/api/guide",
      "source_1": "https://developers.soundcloud.com/docs/api/guide",
      "source_2": "https://developers.soundcloud.com/docs/api/guide",
      "source_3": "https://developers.soundcloud.com/docs/api/guide"
    }
  },
  {
    "name": "TheAudioDB",
    "category": "Music / Entertainment (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.theaudiodb.com/api_guide.php",
    "pricing_url": "https://www.theaudiodb.com/pricing.php",
    "documentation_url": "https://www.theaudiodb.com/api_guide.php",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No credit card is required for the free API key; premium access is paid",
    "authentication": "API key is included in the v1 API URL path",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON",
      "XML"
    ],
    "sdk_languages": [],
    "commercial_use": "Commercial use requires a commercial/premium API arrangement; the free API is not documented as a commercial-use license",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Free API is limited to 30 requests per minute; premium limits are plan-dependent",
    "free_tier_reset": "One minute for the documented free request limit",
    "uses": [
      "media search",
      "artist/title metadata",
      "albums/tracks/movies/games depending on provider",
      "playlists/collections where offered",
      "ratings/discovery"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.theaudiodb.com/api_guide.php",
      "source_1": "https://www.theaudiodb.com/api_guide.php",
      "source_2": "https://www.theaudiodb.com/api_guide.php",
      "source_3": "https://www.theaudiodb.com/api_guide.php"
    }
  },
  {
    "name": "Aylien News API",
    "category": "News (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://aylien.com/news-api",
    "pricing_url": "https://aylien.com/pricing/",
    "documentation_url": "https://docs.aylien.com/news-api/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "A credit card requirement for the current News API plans is Unavailable",
    "authentication": "Application ID and API key sent in the X-AYLIEN-NewsAPI-Application-ID and X-AYLIEN-NewsAPI-Application-Key headers",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [
      "Python",
      "Ruby",
      "Node.js",
      "PHP",
      "Java",
      ".NET"
    ],
    "commercial_use": "Commercial use is governed by AYLIEN terms and the selected plan; exact current permission is Unavailable",
    "self_hostable": "No official self-hosting option is documented",
    "webhooks": "Unavailable",
    "rate_limit": "The API publishes plan-specific rate limits; current numeric limit is Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "news search",
      "articles/headlines",
      "source/topic filtering",
      "date/language/country filtering",
      "article metadata",
      "aggregation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://docs.aylien.com/news-api/",
      "source_1": "https://aylien.com/pricing/",
      "source_2": "https://docs.aylien.com/news-api/",
      "source_3": "https://docs.aylien.com/news-api/"
    }
  },
  {
    "name": "Bing News Search API",
    "category": "News (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.microsoft.com/en-us/bing/apis/bing-news-search-api",
    "pricing_url": "https://azure.microsoft.com/en-us/pricing/details/cognitive-services/search-api/",
    "documentation_url": "https://learn.microsoft.com/en-us/bing/search-apis/bing-news-search/overview",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Ocp-Apim-Subscription-Key header (official documentation)",
    "protocols": [
      "HTTPS",
      "REST/JSON"
    ],
    "sdk_languages": [
      "Unavailable"
    ],
    "commercial_use": "Subject to Microsoft/Azure terms; exact current allowance is Unavailable",
    "self_hostable": "No self-hosting option is published in the official API documentation",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable; Microsoft documentation states Bing Search APIs were retired on August 11, 2025",
    "free_tier_reset": "Unavailable",
    "uses": [
      "news search",
      "articles/headlines",
      "source/topic filtering",
      "date/language/country filtering",
      "article metadata",
      "aggregation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://learn.microsoft.com/en-us/bing/search-apis/bing-news-search/overview",
      "source_1": "https://azure.microsoft.com/en-us/pricing/details/cognitive-services/search-api/",
      "source_2": "https://learn.microsoft.com/en-us/bing/search-apis/bing-news-search/search-the-web",
      "source_3": "https://learn.microsoft.com/en-us/bing/search-apis/bing-news-search/overview"
    }
  },
  {
    "name": "Webz.io News API",
    "category": "News (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://webz.io",
    "pricing_url": "https://webz.io/pricing/",
    "documentation_url": "https://webz.io/products/news-api/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key supplied as the token query parameter",
    "protocols": [
      "HTTPS",
      "REST/JSON"
    ],
    "sdk_languages": [
      "Unavailable"
    ],
    "commercial_use": "Paid plans are presented for business/commercial use; exact license restrictions are Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "news search",
      "articles/headlines",
      "source/topic filtering",
      "date/language/country filtering",
      "article metadata",
      "aggregation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://webz.io/products/news-api/",
      "source_1": "https://webz.io/pricing/",
      "source_2": "https://docs.webz.io/",
      "source_3": "https://docs.webz.io/"
    }
  },
  {
    "name": "Currents API",
    "category": "News / Content",
    "description": "Cataloged API provider.",
    "signup_url": "https://currentsapi.services/en/register",
    "pricing_url": "https://currentsapi.services/en/pricing/",
    "documentation_url": "https://currentsapi.services/en/docs/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key in the apiKey query parameter or Authorization header",
    "protocols": [
      "HTTPS",
      "REST/JSON"
    ],
    "sdk_languages": [
      "Unavailable"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "No; hosted API service, with no self-hosting documentation published",
    "webhooks": "Unavailable",
    "rate_limit": "Free plan: 600 requests per month; additional per-second limit is Unavailable",
    "free_tier_reset": "Monthly",
    "uses": [
      "news search",
      "articles/headlines",
      "source/topic filtering",
      "date/language/country filtering",
      "article metadata",
      "aggregation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://currentsapi.services/en/docs/",
      "source_1": "https://currentsapi.services/en/pricing/",
      "source_2": "https://currentsapi.services/en/docs/",
      "source_3": "https://currentsapi.services/en/docs/"
    }
  },
  {
    "name": "GNews",
    "category": "News / Content",
    "description": "Cataloged API provider.",
    "signup_url": "https://gnews.io/register",
    "pricing_url": "https://gnews.io/pricing",
    "documentation_url": "https://gnews.io/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the free plan; paid-plan billing requirements are Unavailable",
    "authentication": "API key via the token query parameter",
    "protocols": [
      "HTTPS",
      "REST/JSON"
    ],
    "sdk_languages": [
      "Unavailable"
    ],
    "commercial_use": "Commercial use requires a paid plan according to the pricing page",
    "self_hostable": "No self-hosting option is published",
    "webhooks": "Unavailable",
    "rate_limit": "Free plan: 100 requests per day and 10 requests per second",
    "free_tier_reset": "Daily",
    "uses": [
      "news search",
      "articles/headlines",
      "source/topic filtering",
      "date/language/country filtering",
      "article metadata",
      "aggregation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://gnews.io/",
      "source_1": "https://gnews.io/pricing",
      "source_2": "https://gnews.io/docs/v4",
      "source_3": "https://gnews.io/docs/v4"
    }
  },
  {
    "name": "Mediastack",
    "category": "News / Content",
    "description": "Cataloged API provider.",
    "signup_url": "https://mediastack.com/product",
    "pricing_url": "https://mediastack.com/product",
    "documentation_url": "https://mediastack.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No for the free plan; paid-plan billing requirements are Unavailable",
    "authentication": "API access key via the access_key query parameter",
    "protocols": [
      "HTTPS",
      "REST/JSON"
    ],
    "sdk_languages": [
      "Unavailable"
    ],
    "commercial_use": "Commercial use is available on paid plans; exact license restrictions are Unavailable",
    "self_hostable": "No self-hosting option is published",
    "webhooks": "Unavailable",
    "rate_limit": "Free plan: 100 API calls per month; requests-per-second limit is Unavailable",
    "free_tier_reset": "Monthly",
    "uses": [
      "news search",
      "articles/headlines",
      "source/topic filtering",
      "date/language/country filtering",
      "article metadata",
      "aggregation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://mediastack.com/",
      "source_1": "https://mediastack.com/product",
      "source_2": "https://mediastack.com/documentation",
      "source_3": "https://mediastack.com/documentation"
    }
  },
  {
    "name": "New York Times API",
    "category": "News / Content",
    "description": "Cataloged API provider.",
    "signup_url": "https://developer.nytimes.com/accounts/create",
    "pricing_url": "https://developer.nytimes.com/get-started",
    "documentation_url": "https://developer.nytimes.com/get-started",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No credit card is stated as required in the official registration documentation.",
    "authentication": "An API key is required; the key is passed as the api-key query parameter.",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [
      "Unavailable: the official documentation documents HTTP API endpoints, not an official SDK-language list."
    ],
    "commercial_use": "Commercial use is not included in the standard developer terms; commercial licensing/permission is required where applicable.",
    "self_hostable": false,
    "webhooks": "Unavailable: no webhook facility is documented in the official API documentation.",
    "rate_limit": "500 requests per day and 5 requests per second per API key.",
    "free_tier_reset": "Daily quota; the official documentation states 500 requests per day.",
    "uses": [
      "news search",
      "articles/headlines",
      "source/topic filtering",
      "date/language/country filtering",
      "article metadata",
      "aggregation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://developer.nytimes.com/get-started",
      "source_1": "https://developer.nytimes.com/get-started",
      "source_2": "https://developer.nytimes.com/get-started",
      "source_3": "https://developer.nytimes.com/docs"
    }
  },
  {
    "name": "NewsAPI.org",
    "category": "News / Content",
    "description": "Cataloged API provider.",
    "signup_url": "https://newsapi.org/register",
    "pricing_url": "https://newsapi.org/pricing",
    "documentation_url": "https://newsapi.org/docs",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No credit card is stated as required for the Developer plan.",
    "authentication": "An API key is required, supplied as the X-Api-Key HTTP header or apiKey query parameter.",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [
      "Unavailable: official documentation does not publish an official SDK-language list."
    ],
    "commercial_use": "The free Developer plan is for development/testing and is not licensed for production or commercial use; commercial plans are available.",
    "self_hostable": false,
    "webhooks": "Unavailable: no webhook API is documented.",
    "rate_limit": "Developer plan: 100 requests per 24 hours; paid-plan limits depend on the plan.",
    "free_tier_reset": "Every 24 hours for the Developer plan.",
    "uses": [
      "news search",
      "articles/headlines",
      "source/topic filtering",
      "date/language/country filtering",
      "article metadata",
      "aggregation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://newsapi.org/docs",
      "source_1": "https://newsapi.org/pricing",
      "source_2": "https://newsapi.org/docs/authentication",
      "source_3": "https://newsapi.org/docs/endpoints/everything"
    }
  },
  {
    "name": "Reddit API",
    "category": "News / Content",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.reddit.com/prefs/apps",
    "pricing_url": "https://www.reddit.com/wiki/api-terms/",
    "documentation_url": "https://www.reddit.com/dev/api/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No credit card requirement is stated in the official API documentation.",
    "authentication": "OAuth 2.0 is used for authenticated API access; application credentials are obtained through the Reddit app preferences.",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON",
      "OAuth 2.0"
    ],
    "sdk_languages": [
      "Unavailable: Reddit publishes API documentation but no official SDK-language list."
    ],
    "commercial_use": "Commercial use requires a separate commercial Reddit Data API agreement; the standard free access terms do not grant unrestricted commercial use.",
    "self_hostable": false,
    "webhooks": "Unavailable in the Reddit Data API documentation.",
    "rate_limit": "OAuth clients are rate-limited to 1000 requests per 10 minutes (as documented for the Data API).",
    "free_tier_reset": "The request allowance is a rolling 10-minute window, not a daily subscription reset.",
    "uses": [
      "news search",
      "articles/headlines",
      "source/topic filtering",
      "date/language/country filtering",
      "article metadata",
      "aggregation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.reddit.com/dev/api/",
      "source_1": "https://www.reddit.com/prefs/apps",
      "source_2": "https://github.com/reddit-archive/reddit/wiki/OAuth2",
      "source_3": "https://www.reddit.com/dev/api/"
    }
  },
  {
    "name": "The Guardian Open Platform",
    "category": "News / Content",
    "description": "Cataloged API provider.",
    "signup_url": "https://open-platform.theguardian.com/access/",
    "pricing_url": "https://open-platform.theguardian.com/access/",
    "documentation_url": "https://open-platform.theguardian.com/documentation/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No credit card is stated as required for the developer key.",
    "authentication": "A developer API key is required and is passed as the api-key query parameter.",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [
      "Unavailable: the official Open Platform documentation does not publish an official SDK-language list."
    ],
    "commercial_use": "The developer key is for non-commercial use; commercial use requires a commercial key/agreement.",
    "self_hostable": false,
    "webhooks": "Unavailable: no webhook facility is documented.",
    "rate_limit": "Developer key: 12 requests per second and 5000 requests per day.",
    "free_tier_reset": "Daily quota (5000 requests per day).",
    "uses": [
      "news search",
      "articles/headlines",
      "source/topic filtering",
      "date/language/country filtering",
      "article metadata",
      "aggregation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://open-platform.theguardian.com/documentation/",
      "source_1": "https://open-platform.theguardian.com/access/",
      "source_2": "https://open-platform.theguardian.com/documentation/",
      "source_3": "https://open-platform.theguardian.com/documentation/"
    }
  },
  {
    "name": "Adyen API",
    "category": "Payments (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.adyen.com/api-explorer",
    "pricing_url": "https://www.adyen.com/pricing",
    "documentation_url": "https://www.adyen.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No credit card is stated as required to obtain API credentials; Adyen onboarding and merchant-account approval are required.",
    "authentication": "API requests use an API key (or basic authentication for legacy/API-specific integrations); webhooks use HMAC authentication/signature validation.",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [
      ".NET",
      "Java",
      "Node.js",
      "PHP",
      "Python",
      "Go",
      "Ruby"
    ],
    "commercial_use": "Yes, for Adyen merchants and customers under Adyen's commercial agreement and service terms.",
    "self_hostable": false,
    "webhooks": "Yes. Adyen provides webhook endpoints/events, including HMAC-signed webhook notifications.",
    "rate_limit": "Rate limits are endpoint/account specific; Adyen documents HTTP 429 responses and rate-limit handling, but does not publish one universal limit.",
    "free_tier_reset": "No free API tier or free-tier reset is published; pricing is transaction-based and requires a commercial Adyen account.",
    "uses": [
      "data retrieval",
      "search/query operations",
      "resource management where supported",
      "application integrations",
      "automation workflows",
      "developer applications"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.adyen.com/",
      "source_1": "https://docs.adyen.com/development-resources/api-credentials/",
      "source_2": "https://docs.adyen.com/development-resources/api-credentials/",
      "source_3": "https://docs.adyen.com/api-explorer/"
    }
  },
  {
    "name": "Braintree API",
    "category": "Payments (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://developer.paypal.com/braintree/docs",
    "pricing_url": "https://www.braintreepayments.com/pricing",
    "documentation_url": "https://developer.paypal.com/braintree/docs",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API credentials: public key, private key, and merchant ID; client SDKs use client tokens or tokenization keys.",
    "protocols": [
      "HTTPS",
      "JSON REST API"
    ],
    "sdk_languages": [
      "Java",
      ".NET",
      "Node.js",
      "PHP",
      "Python",
      "Ruby"
    ],
    "commercial_use": "Available for merchants under Braintree/PayPal merchant agreement and applicable terms.",
    "self_hostable": false,
    "webhooks": true,
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "data retrieval",
      "search/query operations",
      "resource management where supported",
      "application integrations",
      "automation workflows",
      "developer applications"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://developer.paypal.com/braintree/docs",
      "source_1": "https://www.braintreepayments.com/get-started",
      "source_2": "https://developer.paypal.com/braintree/docs/reference/general/credentials",
      "source_3": "https://developer.paypal.com/braintree/docs/reference/request/transaction/sale"
    }
  },
  {
    "name": "Razorpay API",
    "category": "Payments (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://razorpay.com/docs/",
    "pricing_url": "https://razorpay.com/pricing/",
    "documentation_url": "https://razorpay.com/docs/api/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "HTTP Basic Authentication using Key ID and Key Secret.",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [
      "Java",
      "PHP",
      "Python",
      "Ruby",
      ".NET",
      "Node.js",
      "Go"
    ],
    "commercial_use": "Available for businesses using Razorpay subject to Razorpay terms and merchant onboarding.",
    "self_hostable": false,
    "webhooks": true,
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "data retrieval",
      "search/query operations",
      "resource management where supported",
      "application integrations",
      "automation workflows",
      "developer applications"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://razorpay.com/docs/api/",
      "source_1": "https://razorpay.com/docs/payments/dashboard/account-settings/",
      "source_2": "https://razorpay.com/docs/api/authentication/",
      "source_3": "https://razorpay.com/docs/api/"
    }
  },
  {
    "name": "data.gov",
    "category": "Public / General Data",
    "description": "Cataloged API provider.",
    "signup_url": "https://api.data.gov/signup",
    "pricing_url": "https://api.data.gov/docs/",
    "documentation_url": "https://api.data.gov/docs/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": false,
    "authentication": "API key (api.data.gov); DEMO_KEY is available for testing.",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON",
      "XML"
    ],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": false,
    "rate_limit": "Default limit is 1,000 requests per hour per API key; DEMO_KEY has a lower limit.",
    "free_tier_reset": "Hourly (rate-limit window); exact reset behavior is not otherwise specified.",
    "uses": [
      "dataset search",
      "structured data retrieval",
      "metadata/records",
      "historical time series",
      "research/statistical analysis"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://api.data.gov/docs/",
      "source_1": "https://api.data.gov/signup/",
      "source_2": "https://api.data.gov/docs/api-key/",
      "source_3": "https://api.data.gov/docs/"
    }
  },
  {
    "name": "data.world",
    "category": "Public / General Data",
    "description": "Cataloged API provider.",
    "signup_url": "https://data.world/settings/advanced",
    "pricing_url": "https://data.world/pricing",
    "documentation_url": "https://docs.data.world/developers/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Personal access token (Bearer token) for the API.",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON",
      "GraphQL"
    ],
    "sdk_languages": [
      "Python",
      "R"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": false,
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "dataset search",
      "structured data retrieval",
      "metadata/records",
      "historical time series",
      "research/statistical analysis"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://docs.data.world/developers/",
      "source_1": "https://data.world/pricing",
      "source_2": "https://docs.data.world/developers/api/",
      "source_3": "https://docs.data.world/developers/api/"
    }
  },
  {
    "name": "Eurostat API",
    "category": "Public / General Data",
    "description": "Cataloged API provider.",
    "signup_url": "https://ec.europa.eu/eurostat/web/main/data/web-services",
    "pricing_url": "https://ec.europa.eu/eurostat/about-us/policies/copyright",
    "documentation_url": "https://ec.europa.eu/eurostat/web/main/data/web-services",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": false,
    "authentication": "No authentication or API key is required for the public web services.",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON",
      "XML",
      "SDMX"
    ],
    "sdk_languages": [],
    "commercial_use": "Eurostat data are reusable under the European Commission reuse policy, subject to stated conditions and dataset-specific notices.",
    "self_hostable": "Unavailable",
    "webhooks": false,
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "dataset search",
      "structured data retrieval",
      "metadata/records",
      "historical time series",
      "research/statistical analysis"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://ec.europa.eu/eurostat/web/main/data/web-services",
      "source_1": "https://ec.europa.eu/eurostat/web/json-and-unicode-web-services",
      "source_2": "https://ec.europa.eu/eurostat/web/json-and-unicode-web-services",
      "source_3": "https://ec.europa.eu/eurostat/web/main/data/web-services"
    }
  },
  {
    "name": "Figshare API",
    "category": "Public / General Data",
    "description": "Cataloged API provider.",
    "signup_url": "https://docs.figshare.com",
    "pricing_url": "https://info.figshare.com/",
    "documentation_url": "https://docs.figshare.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API tokens are used for authenticated Figshare API requests.",
    "protocols": [
      "HTTPS",
      "REST/JSON"
    ],
    "sdk_languages": [
      "Python",
      "R",
      "JavaScript"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "The public API documentation does not publish a general rate limit.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "dataset search",
      "structured data retrieval",
      "metadata/records",
      "historical time series",
      "research/statistical analysis"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://docs.figshare.com/",
      "source_1": "https://docs.figshare.com/",
      "source_2": "https://docs.figshare.com/",
      "source_3": "https://docs.figshare.com/"
    }
  },
  {
    "name": "Kaggle API",
    "category": "Public / General Data",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.kaggle.com/settings",
    "pricing_url": "https://www.kaggle.com/terms",
    "documentation_url": "https://github.com/Kaggle/kaggle-api",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "The official Kaggle API client authenticates with a Kaggle API token (kaggle.json) or a configured access token.",
    "protocols": [
      "HTTPS",
      "REST/JSON"
    ],
    "sdk_languages": [
      "Python"
    ],
    "commercial_use": "Unavailable; use of individual datasets is governed by the dataset's stated license.",
    "self_hostable": "No official self-hosting option is published.",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "dataset search",
      "structured data retrieval",
      "metadata/records",
      "historical time series",
      "research/statistical analysis"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://github.com/Kaggle/kaggle-api",
      "source_1": "https://www.kaggle.com/terms",
      "source_2": "https://github.com/Kaggle/kaggle-api#api-credentials",
      "source_3": "https://github.com/Kaggle/kaggle-api"
    }
  },
  {
    "name": "NASA Open APIs",
    "category": "Public / General Data",
    "description": "Cataloged API provider.",
    "signup_url": "https://api.nasa.gov",
    "pricing_url": "https://api.nasa.gov/",
    "documentation_url": "https://api.nasa.gov/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": false,
    "authentication": "An API key is accepted with the api_key parameter; DEMO_KEY is available for testing.",
    "protocols": [
      "HTTPS",
      "REST/JSON"
    ],
    "sdk_languages": [
      "Unavailable"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "DEMO_KEY is limited to 30 requests per hour and 50 requests per day; registered keys have a higher published limit.",
    "free_tier_reset": "The DEMO_KEY daily/hourly limits reset on their published time windows; the documentation does not specify a free-plan billing reset.",
    "uses": [
      "dataset search",
      "structured data retrieval",
      "metadata/records",
      "historical time series",
      "research/statistical analysis"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://api.nasa.gov/",
      "source_1": "https://api.nasa.gov/",
      "source_2": "https://api.nasa.gov/",
      "source_3": "https://api.nasa.gov/"
    }
  },
  {
    "name": "OpenAQ (air quality)",
    "category": "Public / General Data",
    "description": "Cataloged API provider.",
    "signup_url": "https://docs.openaq.org",
    "pricing_url": "https://openaq.org/",
    "documentation_url": "https://docs.openaq.org/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": false,
    "authentication": "OpenAQ API v3 requires an API key supplied in the X-API-Key header.",
    "protocols": [
      "HTTPS",
      "REST/JSON"
    ],
    "sdk_languages": [
      "Python",
      "R"
    ],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "The API documentation publishes request limits for API-key users and unauthenticated users; exact limits are documented on the rate-limits page.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "dataset search",
      "structured data retrieval",
      "metadata/records",
      "historical time series",
      "research/statistical analysis"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://docs.openaq.org/",
      "source_1": "https://docs.openaq.org/",
      "source_2": "https://docs.openaq.org/docs/how-to-use-the-api",
      "source_3": "https://docs.openaq.org/"
    }
  },
  {
    "name": "OpenCorporates",
    "category": "Public / General Data",
    "description": "Cataloged API provider.",
    "signup_url": "https://api.opencorporates.com",
    "pricing_url": "https://opencorporates.com/api/pricing",
    "documentation_url": "https://api.opencorporates.com/documentation/API-Reference",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "The API uses an API key supplied as the key query parameter.",
    "protocols": [
      "HTTPS",
      "REST/JSON",
      "REST/XML"
    ],
    "sdk_languages": [
      "Unavailable"
    ],
    "commercial_use": "Commercial API access is governed by the applicable OpenCorporates plan and terms.",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Rate limits and quotas depend on the API plan; the official API documentation describes plan limits.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "dataset search",
      "structured data retrieval",
      "metadata/records",
      "historical time series",
      "research/statistical analysis"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://api.opencorporates.com/documentation/API-Reference",
      "source_1": "https://opencorporates.com/api/pricing",
      "source_2": "https://api.opencorporates.com/documentation/API-Reference",
      "source_3": "https://api.opencorporates.com/documentation/API-Reference"
    }
  },
  {
    "name": "REST Countries",
    "category": "Public / General Data",
    "description": "Cataloged API provider.",
    "signup_url": "https://restcountries.com",
    "pricing_url": "https://restcountries.com/",
    "documentation_url": "https://restcountries.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No; the public API documentation does not require payment credentials.",
    "authentication": "No authentication documented for the public endpoints.",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON"
    ],
    "sdk_languages": [],
    "commercial_use": "The project describes the API as free for personal or commercial use.",
    "self_hostable": "Yes; the REST Countries project is open source and its repository includes the API implementation and deployment instructions.",
    "webhooks": "Unavailable; no webhook feature is documented.",
    "rate_limit": "10 requests per second.",
    "free_tier_reset": "Unavailable; no separate free-tier reset schedule is published.",
    "uses": [
      "dataset search",
      "structured data retrieval",
      "metadata/records",
      "historical time series",
      "research/statistical analysis"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://restcountries.com/",
      "source_1": "https://restcountries.com/",
      "source_2": "https://restcountries.com/",
      "source_3": "https://restcountries.com/"
    }
  },
  {
    "name": "USGS Earthquake API",
    "category": "Public / General Data",
    "description": "Cataloged API provider.",
    "signup_url": "https://earthquake.usgs.gov/fdsnws/event/1/",
    "pricing_url": "https://earthquake.usgs.gov/data/comcat/",
    "documentation_url": "https://earthquake.usgs.gov/fdsnws/event/1/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No; USGS documents the service as a public data service without API keys or payment credentials.",
    "authentication": "None.",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON",
      "GeoJSON",
      "XML",
      "CSV",
      "KML"
    ],
    "sdk_languages": [],
    "commercial_use": "USGS data are generally public domain, subject to stated USGS exceptions and attribution guidance.",
    "self_hostable": "Unavailable; the API documentation does not publish a self-hosting package.",
    "webhooks": "Unavailable; no webhook feature is documented.",
    "rate_limit": "USGS requests automated clients use no more than 5 requests per second and no more than 2,000 requests per day.",
    "free_tier_reset": "Unavailable; this is not documented as a metered commercial free tier.",
    "uses": [
      "dataset search",
      "structured data retrieval",
      "metadata/records",
      "historical time series",
      "research/statistical analysis"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://earthquake.usgs.gov/fdsnws/event/1/",
      "source_1": "https://earthquake.usgs.gov/data/comcat/",
      "source_2": "https://earthquake.usgs.gov/fdsnws/event/1/",
      "source_3": "https://earthquake.usgs.gov/fdsnws/event/1/"
    }
  },
  {
    "name": "Wikidata API",
    "category": "Public / General Data",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.wikidata.org/wiki/Wikidata:Data_access",
    "pricing_url": "https://www.wikidata.org/wiki/Wikidata:Data_access",
    "documentation_url": "https://www.wikidata.org/wiki/Wikidata:Data_access",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No.",
    "authentication": "Unauthenticated read access is available; write access requires a Wikimedia account and OAuth or bot credentials.",
    "protocols": [
      "HTTPS",
      "MediaWiki Action API",
      "SPARQL",
      "JSON"
    ],
    "sdk_languages": [],
    "commercial_use": "Wikidata structured data is released under CC0.",
    "self_hostable": "Yes for the data/query software ecosystem; Wikibase is published as free/open-source software.",
    "webhooks": "Unavailable; no general Wikidata API webhook is documented.",
    "rate_limit": "The Action API uses maxlag and Wikimedia request limits; no single fixed public requests-per-minute quota is published for all clients.",
    "free_tier_reset": "Unavailable; no paid/free tier or reset schedule is published.",
    "uses": [
      "dataset search",
      "structured data retrieval",
      "metadata/records",
      "historical time series",
      "research/statistical analysis"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.wikidata.org/wiki/Wikidata:Data_access",
      "source_1": "https://www.wikidata.org/wiki/Wikidata:Data_access",
      "source_2": "https://www.mediawiki.org/wiki/API:Login",
      "source_3": "https://www.wikidata.org/wiki/Wikidata:Data_access"
    }
  },
  {
    "name": "Wikipedia API",
    "category": "Public / General Data",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.mediawiki.org/wiki/API:Main_page",
    "pricing_url": "https://www.mediawiki.org/wiki/API:Main_page",
    "documentation_url": "https://www.mediawiki.org/wiki/API:Main_page",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No.",
    "authentication": "Unauthenticated read access is available; authenticated operations use Wikimedia account credentials or OAuth.",
    "protocols": [
      "HTTPS",
      "MediaWiki Action API",
      "REST",
      "JSON",
      "XML"
    ],
    "sdk_languages": [],
    "commercial_use": "Wikipedia text is generally available under CC BY-SA and GFDL, subject to attribution and license terms.",
    "self_hostable": "Yes; MediaWiki is free/open-source software and Wikipedia content dumps are published.",
    "webhooks": "Unavailable; no general Wikipedia API webhook is documented.",
    "rate_limit": "No universal fixed quota is published; clients should identify themselves, use maxlag, and follow Wikimedia API etiquette and request limits.",
    "free_tier_reset": "Unavailable; no paid/free tier or reset schedule is published.",
    "uses": [
      "dataset search",
      "structured data retrieval",
      "metadata/records",
      "historical time series",
      "research/statistical analysis"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://www.mediawiki.org/wiki/API:Main_page",
      "source_1": "https://www.mediawiki.org/wiki/API:Main_page",
      "source_2": "https://www.mediawiki.org/wiki/API:Login",
      "source_3": "https://www.mediawiki.org/wiki/API:Main_page"
    }
  },
  {
    "name": "Zenodo API",
    "category": "Public / General Data",
    "description": "Cataloged API provider.",
    "signup_url": "https://zenodo.org/account/settings/applications/",
    "pricing_url": "https://about.zenodo.org/",
    "documentation_url": "https://developers.zenodo.org/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Not independently verified in the primary catalog.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "No; the public API documentation does not require a credit card.",
    "authentication": "Personal access tokens and OAuth 2.0 are documented for authenticated API operations; public read endpoints can be accessed without authentication.",
    "protocols": [
      "HTTPS",
      "REST",
      "JSON",
      "OAuth 2.0"
    ],
    "sdk_languages": [],
    "commercial_use": "Unavailable; Zenodo's API documentation does not state a general commercial-use license for the service. Individual records have their own licenses.",
    "self_hostable": "Unavailable; the hosted Zenodo API documentation does not publish a self-hosting offering or package.",
    "webhooks": "Unavailable; no webhook feature is documented in the API reference.",
    "rate_limit": "1,000 requests per hour for authenticated users; Zenodo documents separate limits for unauthenticated requests and may return HTTP 429.",
    "free_tier_reset": "Unavailable; no paid/free API tier reset schedule is published.",
    "uses": [
      "dataset search",
      "structured data retrieval",
      "metadata/records",
      "historical time series",
      "research/statistical analysis"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "official-source-verification",
    "status": "active",
    "verification_status": "manually-verified",
    "verification_sources": {
      "provider": "https://developers.zenodo.org/",
      "source_1": "https://developers.zenodo.org/",
      "source_2": "https://developers.zenodo.org/#quickstart",
      "source_3": "https://developers.zenodo.org/"
    }
  },
  {
    "name": "arXiv API",
    "category": "Public / Scientific Data (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://arxiv.org/help/api",
    "pricing_url": "https://arxiv.org/help/api",
    "documentation_url": "https://arxiv.org/help/api",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Unavailable in the official source reviewed; no free-tier claim is made.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "dataset search",
      "structured data retrieval",
      "metadata/records",
      "historical time series",
      "research/statistical analysis"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://arxiv.org/help/api",
      "source_1": "https://arxiv.org/help/api",
      "source_2": "https://arxiv.org/help/api"
    }
  },
  {
    "name": "CDC Data API",
    "category": "Public / Scientific Data (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://data.cdc.gov",
    "pricing_url": "https://data.cdc.gov",
    "documentation_url": "https://data.cdc.gov",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Unavailable in the official source reviewed; no free-tier claim is made.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "dataset search",
      "structured data retrieval",
      "metadata/records",
      "historical time series",
      "research/statistical analysis"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://data.cdc.gov",
      "source_1": "https://data.cdc.gov",
      "source_2": "https://data.cdc.gov"
    }
  },
  {
    "name": "CrossRef API",
    "category": "Public / Scientific Data (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.crossref.org/documentation/retrieve-metadata/rest-api/",
    "pricing_url": "https://www.crossref.org/documentation/retrieve-metadata/rest-api/access-and-authentication",
    "documentation_url": "https://www.crossref.org/documentation/retrieve-metadata/rest-api/",
    "free_tier": {
      "has_free_tier": true,
      "type": "public-api",
      "details": "Public REST API is available without signup; polite access uses an email address.",
      "amount": "Public pool: 5 requests/second; polite pool: 10 requests/second",
      "expiry": "Unavailable"
    },
    "requires_credit_card": false,
    "authentication": "No authentication for public access; polite access uses mailto/email identification.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Public 5 req/s, concurrency 1; Polite 10 req/s, concurrency 3; Plus 150 req/s.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "dataset search",
      "structured data retrieval",
      "metadata/records",
      "historical time series",
      "research/statistical analysis"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://www.crossref.org/documentation/retrieve-metadata/rest-api/",
      "source_1": "https://www.crossref.org/documentation/retrieve-metadata/rest-api/",
      "source_2": "https://www.crossref.org/documentation/retrieve-metadata/rest-api/",
      "source_3": "https://www.crossref.org/documentation/retrieve-metadata/rest-api/access-and-authentication"
    }
  },
  {
    "name": "data.europa.eu",
    "category": "Public / Scientific Data (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://data.europa.eu/en",
    "pricing_url": "https://data.europa.eu/en",
    "documentation_url": "https://data.europa.eu/en",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Unavailable in the official source reviewed; no free-tier claim is made.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "dataset search",
      "structured data retrieval",
      "metadata/records",
      "historical time series",
      "research/statistical analysis"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://data.europa.eu/en",
      "source_1": "https://data.europa.eu/en",
      "source_2": "https://data.europa.eu/en"
    }
  },
  {
    "name": "GBIF (biodiversity)",
    "category": "Public / Scientific Data (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.gbif.org/developer/summary",
    "pricing_url": "https://www.gbif.org/developer/summary",
    "documentation_url": "https://www.gbif.org/developer/summary",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Unavailable in the official source reviewed; no free-tier claim is made.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "dataset search",
      "structured data retrieval",
      "metadata/records",
      "historical time series",
      "research/statistical analysis"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://www.gbif.org/developer/summary",
      "source_1": "https://www.gbif.org/developer/summary",
      "source_2": "https://www.gbif.org/developer/summary"
    }
  },
  {
    "name": "NASA Exoplanet Archive",
    "category": "Public / Scientific Data (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://exoplanetarchive.ipac.caltech.edu",
    "pricing_url": "https://exoplanetarchive.ipac.caltech.edu",
    "documentation_url": "https://exoplanetarchive.ipac.caltech.edu",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Unavailable in the official source reviewed; no free-tier claim is made.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "dataset search",
      "structured data retrieval",
      "metadata/records",
      "historical time series",
      "research/statistical analysis"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://exoplanetarchive.ipac.caltech.edu",
      "source_1": "https://exoplanetarchive.ipac.caltech.edu",
      "source_2": "https://exoplanetarchive.ipac.caltech.edu"
    }
  },
  {
    "name": "OpenAlex",
    "category": "Public / Scientific Data (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://openalex.org",
    "pricing_url": "https://help.openalex.org/api/authentication/",
    "documentation_url": "https://openalex.org",
    "free_tier": {
      "has_free_tier": true,
      "type": "daily-credit",
      "details": "Free API access; a free API key raises the daily budget 10×.",
      "amount": "$1/day free usage with a free key",
      "expiry": "Daily; resets at midnight UTC"
    },
    "requires_credit_card": false,
    "authentication": "API key via api_key query parameter or Bearer authorization; keyless casual use is also supported.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "More than 100 requests/second returns 429; daily budget depends on account/key.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "dataset search",
      "structured data retrieval",
      "metadata/records",
      "historical time series",
      "research/statistical analysis"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://openalex.org",
      "source_1": "https://openalex.org",
      "source_2": "https://openalex.org",
      "source_3": "https://help.openalex.org/api/authentication/"
    }
  },
  {
    "name": "PubMed E-utilities",
    "category": "Public / Scientific Data (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.ncbi.nlm.nih.gov/books/NBK25501/",
    "pricing_url": "https://www.ncbi.nlm.nih.gov/books/NBK25501/",
    "documentation_url": "https://www.ncbi.nlm.nih.gov/books/NBK25501/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Unavailable in the official source reviewed; no free-tier claim is made.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "dataset search",
      "structured data retrieval",
      "metadata/records",
      "historical time series",
      "research/statistical analysis"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://www.ncbi.nlm.nih.gov/books/NBK25501/",
      "source_1": "https://www.ncbi.nlm.nih.gov/books/NBK25501/",
      "source_2": "https://www.ncbi.nlm.nih.gov/books/NBK25501/"
    }
  },
  {
    "name": "Semantic Scholar API",
    "category": "Public / Scientific Data (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.semanticscholar.org/product/api",
    "pricing_url": "https://www.semanticscholar.org/product/api",
    "documentation_url": "https://www.semanticscholar.org/product/api",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Unavailable in the official source reviewed; no free-tier claim is made.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "dataset search",
      "structured data retrieval",
      "metadata/records",
      "historical time series",
      "research/statistical analysis"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://www.semanticscholar.org/product/api",
      "source_1": "https://www.semanticscholar.org/product/api",
      "source_2": "https://www.semanticscholar.org/product/api"
    }
  },
  {
    "name": "UK data.gov.uk",
    "category": "Public / Scientific Data (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.data.gov.uk",
    "pricing_url": "https://www.data.gov.uk",
    "documentation_url": "https://www.data.gov.uk",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Unavailable in the official source reviewed; no free-tier claim is made.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "dataset search",
      "structured data retrieval",
      "metadata/records",
      "historical time series",
      "research/statistical analysis"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://www.data.gov.uk",
      "source_1": "https://www.data.gov.uk",
      "source_2": "https://www.data.gov.uk"
    }
  },
  {
    "name": "US Census Bureau API",
    "category": "Public / Scientific Data (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://api.census.gov/data/key_signup.html",
    "pricing_url": "https://www.census.gov/data/developers/guidance/api-user-guide.API_Key.html",
    "documentation_url": "https://api.census.gov/data/key_signup.html",
    "free_tier": {
      "has_free_tier": true,
      "type": "free-api-key",
      "details": "Census Data API access and API keys are free.",
      "amount": "Free API key; dataset-specific query limits apply",
      "expiry": "Unavailable"
    },
    "requires_credit_card": false,
    "authentication": "API key supplied as the key query parameter for datasets that require it.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Dataset-specific query limits; see the current Census API guide.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "dataset search",
      "structured data retrieval",
      "metadata/records",
      "historical time series",
      "research/statistical analysis"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://api.census.gov/data/key_signup.html",
      "source_1": "https://api.census.gov/data/key_signup.html",
      "source_2": "https://api.census.gov/data/key_signup.html",
      "source_3": "https://www.census.gov/data/developers/guidance/api-user-guide.API_Key.html"
    }
  },
  {
    "name": "WHO API",
    "category": "Public / Scientific Data (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.who.int/data/gho/info/gho-odata-api",
    "pricing_url": "https://www.who.int/data/gho/info/gho-odata-api",
    "documentation_url": "https://www.who.int/data/gho/info/gho-odata-api",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Unavailable in the official source reviewed; no free-tier claim is made.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "dataset search",
      "structured data retrieval",
      "metadata/records",
      "historical time series",
      "research/statistical analysis"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://www.who.int/data/gho/info/gho-odata-api",
      "source_1": "https://www.who.int/data/gho/info/gho-odata-api",
      "source_2": "https://www.who.int/data/gho/info/gho-odata-api"
    }
  },
  {
    "name": "World Air Quality Index",
    "category": "Public / Scientific Data (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://aqicn.org/api/",
    "pricing_url": "https://aqicn.org/api/",
    "documentation_url": "https://aqicn.org/api/",
    "free_tier": {
      "has_free_tier": true,
      "type": "rate-limited-free",
      "details": "API access is available with an API token; exact current quota should be checked on the provider page.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API token supplied with API requests.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "dataset search",
      "structured data retrieval",
      "metadata/records",
      "historical time series",
      "research/statistical analysis"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://aqicn.org/api/",
      "source_1": "https://aqicn.org/api/",
      "source_2": "https://aqicn.org/api/",
      "source_3": "https://aqicn.org/api/"
    }
  },
  {
    "name": "ATTOM Data",
    "category": "Real Estate",
    "description": "Cataloged API provider.",
    "signup_url": "https://api.developer.attomdata.com",
    "pricing_url": "https://api.developer.attomdata.com",
    "documentation_url": "https://api.developer.attomdata.com",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Unavailable in the official source reviewed; no free-tier claim is made.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "property search",
      "property records",
      "ownership/valuation",
      "listing/market data",
      "real-estate analytics"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://api.developer.attomdata.com",
      "source_1": "https://api.developer.attomdata.com",
      "source_2": "https://api.developer.attomdata.com"
    }
  },
  {
    "name": "Bridge Interactive (Zillow data)",
    "category": "Real Estate",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.bridgedataoutput.com",
    "pricing_url": "https://www.bridgedataoutput.com",
    "documentation_url": "https://www.bridgedataoutput.com",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Unavailable in the official source reviewed; no free-tier claim is made.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "property search",
      "property records",
      "ownership/valuation",
      "listing/market data",
      "real-estate analytics"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://www.bridgedataoutput.com",
      "source_1": "https://www.bridgedataoutput.com",
      "source_2": "https://www.bridgedataoutput.com"
    }
  },
  {
    "name": "Estated",
    "category": "Real Estate",
    "description": "Cataloged API provider.",
    "signup_url": "https://estated.com",
    "pricing_url": "https://estated.com/pdfs/api-pricing.pdf",
    "documentation_url": "https://estated.com",
    "free_tier": {
      "has_free_tier": true,
      "type": "trial",
      "details": "Estated offers a free initial API trial.",
      "amount": "100 API calls",
      "expiry": "Trial"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API credentials.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Plan-specific.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "property search",
      "property records",
      "ownership/valuation",
      "listing/market data",
      "real-estate analytics"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://estated.com",
      "source_1": "https://estated.com",
      "source_2": "https://estated.com",
      "source_3": "https://estated.com/pdfs/api-pricing.pdf"
    }
  },
  {
    "name": "Bing Web Search API",
    "category": "Search / Scraping / Misc Utility",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.microsoft.com/en-us/bing/apis/bing-web-search-api",
    "pricing_url": "https://learn.microsoft.com/en-us/lifecycle/announcements/bing-search-api-retirement",
    "documentation_url": "https://www.microsoft.com/en-us/bing/apis/bing-web-search-api",
    "free_tier": {
      "has_free_tier": false,
      "type": "retired",
      "details": "Microsoft retired Bing Search APIs on August 11, 2025; new signup and use are no longer available.",
      "amount": "Unavailable",
      "expiry": "Retired August 11, 2025"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "web/search queries",
      "content/page retrieval",
      "structured extraction",
      "filtering/metadata",
      "research/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "retired",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://www.microsoft.com/en-us/bing/apis/bing-web-search-api",
      "source_1": "https://www.microsoft.com/en-us/bing/apis/bing-web-search-api",
      "source_2": "https://www.microsoft.com/en-us/bing/apis/bing-web-search-api",
      "source_3": "https://learn.microsoft.com/en-us/lifecycle/announcements/bing-search-api-retirement"
    }
  },
  {
    "name": "Clearout (email verification)",
    "category": "Search / Scraping / Misc Utility",
    "description": "Cataloged API provider.",
    "signup_url": "https://clearout.io",
    "pricing_url": "https://clearout.io/pricing-guide/",
    "documentation_url": "https://clearout.io",
    "free_tier": {
      "has_free_tier": true,
      "type": "credits-or-trial",
      "details": "Clearout offers API-based verification with credit-based billing; free allowance should not be assumed from the current pricing guide.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API credentials required.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "web/search queries",
      "content/page retrieval",
      "structured extraction",
      "filtering/metadata",
      "research/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://clearout.io",
      "source_1": "https://clearout.io",
      "source_2": "https://clearout.io",
      "source_3": "https://clearout.io/pricing-guide/"
    }
  },
  {
    "name": "Google Custom Search API",
    "category": "Search / Scraping / Misc Utility",
    "description": "Cataloged API provider.",
    "signup_url": "https://programmablesearchengine.google.com",
    "pricing_url": "https://developers.google.com/custom-search/v1/overview",
    "documentation_url": "https://programmablesearchengine.google.com",
    "free_tier": {
      "has_free_tier": true,
      "type": "legacy-free-quota",
      "details": "The API provides 100 free queries/day only for existing customers; it is closed to new customers and scheduled for discontinuation.",
      "amount": "100 queries/day for existing customers",
      "expiry": "Service discontinuation January 1, 2027"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key plus Programmable Search Engine ID.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "100 free queries/day; additional queries are billed for existing customers.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "web/search queries",
      "content/page retrieval",
      "structured extraction",
      "filtering/metadata",
      "research/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://programmablesearchengine.google.com",
      "source_1": "https://programmablesearchengine.google.com",
      "source_2": "https://programmablesearchengine.google.com",
      "source_3": "https://developers.google.com/custom-search/v1/overview"
    }
  },
  {
    "name": "IPGeolocation.io",
    "category": "Search / Scraping / Misc Utility",
    "description": "Cataloged API provider.",
    "signup_url": "https://ipgeolocation.io",
    "pricing_url": "https://ipgeolocation.io/pricing.html",
    "documentation_url": "https://ipgeolocation.io",
    "free_tier": {
      "has_free_tier": true,
      "type": "daily-credits",
      "details": "Free Developer plan provides 1,000 API credits per day and does not require a credit card.",
      "amount": "1,000 credits/day",
      "expiry": "Daily"
    },
    "requires_credit_card": false,
    "authentication": "API key supplied with requests.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Free plan: 1,000 successful requests/credits per day; no per-minute limit is enforced.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "geocoding",
      "reverse geocoding",
      "places/location search",
      "routing and directions",
      "maps/tiles",
      "address/location metadata"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://ipgeolocation.io",
      "source_1": "https://ipgeolocation.io",
      "source_2": "https://ipgeolocation.io",
      "source_3": "https://ipgeolocation.io/pricing.html"
    }
  },
  {
    "name": "Kickbox (email verification)",
    "category": "Search / Scraping / Misc Utility",
    "description": "Cataloged API provider.",
    "signup_url": "https://kickbox.com",
    "pricing_url": "https://kickbox.com",
    "documentation_url": "https://kickbox.com",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Unavailable in the official source reviewed; no free-tier claim is made.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "web/search queries",
      "content/page retrieval",
      "structured extraction",
      "filtering/metadata",
      "research/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://kickbox.com",
      "source_1": "https://kickbox.com",
      "source_2": "https://kickbox.com"
    }
  },
  {
    "name": "NumVerify (phone validation)",
    "category": "Search / Scraping / Misc Utility",
    "description": "Cataloged API provider.",
    "signup_url": "https://numverify.com",
    "pricing_url": "https://numverify.com",
    "documentation_url": "https://numverify.com",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Unavailable in the official source reviewed; no free-tier claim is made.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "web/search queries",
      "content/page retrieval",
      "structured extraction",
      "filtering/metadata",
      "research/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://numverify.com",
      "source_1": "https://numverify.com",
      "source_2": "https://numverify.com"
    }
  },
  {
    "name": "Random.org API",
    "category": "Search / Scraping / Misc Utility",
    "description": "Cataloged API provider.",
    "signup_url": "https://api.random.org",
    "pricing_url": "https://api.random.org/pricing",
    "documentation_url": "https://api.random.org",
    "free_tier": {
      "has_free_tier": true,
      "type": "developer-free-key",
      "details": "Developer Core API license is free for development/testing.",
      "amount": "Up to 1,000 requests/day",
      "expiry": "Daily"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key/license credentials.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Maximum 1,000 requests/day and 10 requests/sec for Developer license.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "web/search queries",
      "content/page retrieval",
      "structured extraction",
      "filtering/metadata",
      "research/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://api.random.org",
      "source_1": "https://api.random.org",
      "source_2": "https://api.random.org",
      "source_3": "https://api.random.org/pricing"
    }
  },
  {
    "name": "ScrapingBee",
    "category": "Search / Scraping / Misc Utility",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.scrapingbee.com",
    "pricing_url": "https://www.scrapingbee.com/pricing/",
    "documentation_url": "https://www.scrapingbee.com",
    "free_tier": {
      "has_free_tier": true,
      "type": "trial-credits",
      "details": "Free trial includes 1,000 API credits and does not require a credit card.",
      "amount": "1,000 credits",
      "expiry": "Trial"
    },
    "requires_credit_card": false,
    "authentication": "API key.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Plan-specific.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "web/search queries",
      "content/page retrieval",
      "structured extraction",
      "filtering/metadata",
      "research/automation"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://www.scrapingbee.com",
      "source_1": "https://www.scrapingbee.com",
      "source_2": "https://www.scrapingbee.com",
      "source_3": "https://www.scrapingbee.com/pricing/"
    }
  },
  {
    "name": "AbuseIPDB",
    "category": "Security / Threat Intel",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.abuseipdb.com/register",
    "pricing_url": "https://www.abuseipdb.com/pricing",
    "documentation_url": "https://www.abuseipdb.com/register",
    "free_tier": {
      "has_free_tier": true,
      "type": "free-forever",
      "details": "Individual free plan includes IP checks/reports and blacklist checks.",
      "amount": "1,000 checks/reports/day; 100 block checks/day",
      "expiry": "Free forever"
    },
    "requires_credit_card": false,
    "authentication": "API key required for API requests.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Free plan limits include 1,000 checks/reports per day and 100 block checks per day.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "IP/domain/URL reputation",
      "threat intelligence",
      "host/service analysis",
      "breach/malware lookups where offered",
      "security research data"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://www.abuseipdb.com/register",
      "source_1": "https://www.abuseipdb.com/register",
      "source_2": "https://www.abuseipdb.com/register",
      "source_3": "https://www.abuseipdb.com/pricing"
    }
  },
  {
    "name": "Censys API",
    "category": "Security / Threat Intel",
    "description": "Cataloged API provider.",
    "signup_url": "https://search.censys.io/account/api",
    "pricing_url": "https://docs.censys.com/docs/platform-credits-free-starter",
    "documentation_url": "https://search.censys.io/account/api",
    "free_tier": {
      "has_free_tier": true,
      "type": "monthly-credits",
      "details": "Censys Free users receive monthly credits usable in the platform and API.",
      "amount": "100 credits/month",
      "expiry": "Monthly; unused credits expire"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Censys account/API credentials.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Usage is credit-based; endpoint actions consume credits.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "IP/domain/URL reputation",
      "threat intelligence",
      "host/service analysis",
      "breach/malware lookups where offered",
      "security research data"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://search.censys.io/account/api",
      "source_1": "https://search.censys.io/account/api",
      "source_2": "https://search.censys.io/account/api",
      "source_3": "https://docs.censys.com/docs/platform-credits-free-starter"
    }
  },
  {
    "name": "Have I Been Pwned API",
    "category": "Security / Threat Intel",
    "description": "Cataloged API provider.",
    "signup_url": "https://haveibeenpwned.com/API/Key",
    "pricing_url": "https://haveibeenpwned.com/API/v3",
    "documentation_url": "https://haveibeenpwned.com/API/Key",
    "free_tier": {
      "has_free_tier": true,
      "type": "keyless-password-api",
      "details": "Pwned Passwords API is free and requires no authentication; authenticated breach/domain APIs require a subscription key.",
      "amount": "Pwned Passwords is free; other API features depend on subscription tier",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "No key for Pwned Passwords; hibp-api-key header for authenticated breach/domain APIs.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Plan/endpoint-specific.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "IP/domain/URL reputation",
      "threat intelligence",
      "host/service analysis",
      "breach/malware lookups where offered",
      "security research data"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://haveibeenpwned.com/API/Key",
      "source_1": "https://haveibeenpwned.com/API/Key",
      "source_2": "https://haveibeenpwned.com/API/Key",
      "source_3": "https://haveibeenpwned.com/API/v3"
    }
  },
  {
    "name": "Shodan API",
    "category": "Security / Threat Intel",
    "description": "Cataloged API provider.",
    "signup_url": "https://developer.shodan.io",
    "pricing_url": "https://help.shodan.io/the-basics/credit-types-explained",
    "documentation_url": "https://developer.shodan.io",
    "free_tier": {
      "has_free_tier": "Unavailable",
      "type": "account-credits",
      "details": "API access is credit-based; current free allocation is account/plan dependent.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Credit and plan dependent.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "IP/domain/URL reputation",
      "threat intelligence",
      "host/service analysis",
      "breach/malware lookups where offered",
      "security research data"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://developer.shodan.io",
      "source_1": "https://developer.shodan.io",
      "source_2": "https://developer.shodan.io",
      "source_3": "https://help.shodan.io/the-basics/credit-types-explained"
    }
  },
  {
    "name": "URLScan.io",
    "category": "Security / Threat Intel",
    "description": "Cataloged API provider.",
    "signup_url": "https://urlscan.io/about-api/",
    "pricing_url": "https://urlscan.io/docs/api/",
    "documentation_url": "https://urlscan.io/about-api/",
    "free_tier": {
      "has_free_tier": true,
      "type": "public-account-api",
      "details": "API access is available to registered users; exact quotas are account/action-specific.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key for authenticated use; unauthenticated use has minor quotas.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Separate per-minute, per-hour and per-day limits by action.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "IP/domain/URL reputation",
      "threat intelligence",
      "host/service analysis",
      "breach/malware lookups where offered",
      "security research data"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://urlscan.io/about-api/",
      "source_1": "https://urlscan.io/about-api/",
      "source_2": "https://urlscan.io/about-api/",
      "source_3": "https://urlscan.io/docs/api/"
    }
  },
  {
    "name": "VirusTotal API",
    "category": "Security / Threat Intel",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.virustotal.com/gui/join-us",
    "pricing_url": "https://docs.virustotal.com/reference/public-vs-premium-api",
    "documentation_url": "https://www.virustotal.com/gui/join-us",
    "free_tier": {
      "has_free_tier": true,
      "type": "public-api-key",
      "details": "Registered VirusTotal Community users receive a public API key.",
      "amount": "500 requests/day; 4 requests/minute",
      "expiry": "Daily"
    },
    "requires_credit_card": false,
    "authentication": "x-apikey header using the personal public API key.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "4 requests/minute and 500 requests/day for Public API.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "IP/domain/URL reputation",
      "threat intelligence",
      "host/service analysis",
      "breach/malware lookups where offered",
      "security research data"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://www.virustotal.com/gui/join-us",
      "source_1": "https://www.virustotal.com/gui/join-us",
      "source_2": "https://www.virustotal.com/gui/join-us",
      "source_3": "https://docs.virustotal.com/reference/public-vs-premium-api"
    }
  },
  {
    "name": "Discord API",
    "category": "Social Media",
    "description": "Cataloged API provider.",
    "signup_url": "https://discord.com/developers/docs/intro",
    "pricing_url": "https://discord.com/developers/docs/intro",
    "documentation_url": "https://discord.com/developers/docs/intro",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Unavailable in the official source reviewed; no free-tier claim is made.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "account/profile data where permitted",
      "posts/content",
      "publishing where permitted",
      "comments/messages where permitted",
      "analytics/integrations"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://discord.com/developers/docs/intro",
      "source_1": "https://discord.com/developers/docs/intro",
      "source_2": "https://discord.com/developers/docs/intro"
    }
  },
  {
    "name": "Facebook Graph API",
    "category": "Social Media",
    "description": "Cataloged API provider.",
    "signup_url": "https://developers.facebook.com",
    "pricing_url": "https://developers.facebook.com",
    "documentation_url": "https://developers.facebook.com",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Unavailable in the official source reviewed; no free-tier claim is made.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "account/profile data where permitted",
      "posts/content",
      "publishing where permitted",
      "comments/messages where permitted",
      "analytics/integrations"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://developers.facebook.com",
      "source_1": "https://developers.facebook.com",
      "source_2": "https://developers.facebook.com"
    }
  },
  {
    "name": "Instagram Graph API",
    "category": "Social Media",
    "description": "Cataloged API provider.",
    "signup_url": "https://developers.facebook.com/docs/instagram-api/",
    "pricing_url": "https://developers.facebook.com/docs/instagram-api/",
    "documentation_url": "https://developers.facebook.com/docs/instagram-api/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Unavailable in the official source reviewed; no free-tier claim is made.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "account/profile data where permitted",
      "posts/content",
      "publishing where permitted",
      "comments/messages where permitted",
      "analytics/integrations"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://developers.facebook.com/docs/instagram-api/",
      "source_1": "https://developers.facebook.com/docs/instagram-api/",
      "source_2": "https://developers.facebook.com/docs/instagram-api/"
    }
  },
  {
    "name": "LinkedIn API",
    "category": "Social Media",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.linkedin.com/developers/",
    "pricing_url": "https://www.linkedin.com/legal/l/api-terms-of-use",
    "documentation_url": "https://www.linkedin.com/developers/",
    "free_tier": {
      "has_free_tier": true,
      "type": "free-api",
      "details": "LinkedIn states its APIs are currently provided for free, subject to its API terms and access controls.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "OAuth 2.0 and app credentials as required by the selected API.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "API/product-specific.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "account/profile data where permitted",
      "posts/content",
      "publishing where permitted",
      "comments/messages where permitted",
      "analytics/integrations"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://www.linkedin.com/developers/",
      "source_1": "https://www.linkedin.com/developers/",
      "source_2": "https://www.linkedin.com/developers/",
      "source_3": "https://www.linkedin.com/legal/l/api-terms-of-use"
    }
  },
  {
    "name": "Mastodon API",
    "category": "Social Media",
    "description": "Cataloged API provider.",
    "signup_url": "https://docs.joinmastodon.org/api/",
    "pricing_url": "https://docs.joinmastodon.org/api/",
    "documentation_url": "https://docs.joinmastodon.org/api/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Unavailable in the official source reviewed; no free-tier claim is made.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "account/profile data where permitted",
      "posts/content",
      "publishing where permitted",
      "comments/messages where permitted",
      "analytics/integrations"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://docs.joinmastodon.org/api/",
      "source_1": "https://docs.joinmastodon.org/api/",
      "source_2": "https://docs.joinmastodon.org/api/"
    }
  },
  {
    "name": "Pinterest API",
    "category": "Social Media",
    "description": "Cataloged API provider.",
    "signup_url": "https://developers.pinterest.com",
    "pricing_url": "https://developers.pinterest.com/docs/key-concepts/access-tiers/",
    "documentation_url": "https://developers.pinterest.com",
    "free_tier": {
      "has_free_tier": true,
      "type": "trial-access",
      "details": "Approved apps receive Trial access with daily rate limits.",
      "amount": "Trial access: generally 1,000 requests/day depending on endpoint category",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "OAuth access token.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Trial access is rate-limited by endpoint category; universal trial limit is 1,000 requests/day.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "account/profile data where permitted",
      "posts/content",
      "publishing where permitted",
      "comments/messages where permitted",
      "analytics/integrations"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://developers.pinterest.com",
      "source_1": "https://developers.pinterest.com",
      "source_2": "https://developers.pinterest.com",
      "source_3": "https://developers.pinterest.com/docs/key-concepts/access-tiers/"
    }
  },
  {
    "name": "Telegram Bot API",
    "category": "Social Media",
    "description": "Cataloged API provider.",
    "signup_url": "https://core.telegram.org/bots/api",
    "pricing_url": "https://core.telegram.org/bots/api",
    "documentation_url": "https://core.telegram.org/bots/api",
    "free_tier": {
      "has_free_tier": true,
      "type": "free-api",
      "details": "Telegram Bot API is available to bot developers without a paid API subscription; higher broadcast throughput is paid.",
      "amount": "Free bot messaging subject to rate limits",
      "expiry": "Unavailable"
    },
    "requires_credit_card": false,
    "authentication": "Bot token issued by BotFather.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Default broadcast allowance is about 30 messages/sec; higher throughput uses paid broadcasts.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "account/profile data where permitted",
      "posts/content",
      "publishing where permitted",
      "comments/messages where permitted",
      "analytics/integrations"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://core.telegram.org/bots/api",
      "source_1": "https://core.telegram.org/bots/api",
      "source_2": "https://core.telegram.org/bots/api",
      "source_3": "https://core.telegram.org/bots/api"
    }
  },
  {
    "name": "TikTok for Developers",
    "category": "Social Media",
    "description": "Cataloged API provider.",
    "signup_url": "https://developers.tiktok.com",
    "pricing_url": "https://developers.tiktok.com",
    "documentation_url": "https://developers.tiktok.com",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Unavailable in the official source reviewed; no free-tier claim is made.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "account/profile data where permitted",
      "posts/content",
      "publishing where permitted",
      "comments/messages where permitted",
      "analytics/integrations"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://developers.tiktok.com",
      "source_1": "https://developers.tiktok.com",
      "source_2": "https://developers.tiktok.com"
    }
  },
  {
    "name": "X (Twitter) API",
    "category": "Social Media",
    "description": "Cataloged API provider.",
    "signup_url": "https://developer.twitter.com",
    "pricing_url": "https://developer.twitter.com",
    "documentation_url": "https://developer.twitter.com",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Unavailable in the official source reviewed; no free-tier claim is made.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "account/profile data where permitted",
      "posts/content",
      "publishing where permitted",
      "comments/messages where permitted",
      "analytics/integrations"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://developer.twitter.com",
      "source_1": "https://developer.twitter.com",
      "source_2": "https://developer.twitter.com"
    }
  },
  {
    "name": "API-Football",
    "category": "Sports",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.api-football.com",
    "pricing_url": "https://www.api-football.com/pricing",
    "documentation_url": "https://www.api-football.com",
    "free_tier": {
      "has_free_tier": true,
      "type": "free-api-key",
      "details": "Free plan is $0 and provides 100 requests/day.",
      "amount": "100 requests/day; 10 requests/minute",
      "expiry": "Daily"
    },
    "requires_credit_card": false,
    "authentication": "API key from the account dashboard.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Free plan: 10 requests/minute.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "scores/live events",
      "fixtures/schedules",
      "teams and players",
      "standings",
      "statistics",
      "league/competition data"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://www.api-football.com",
      "source_1": "https://www.api-football.com",
      "source_2": "https://www.api-football.com",
      "source_3": "https://www.api-football.com/pricing"
    }
  },
  {
    "name": "balldontlie (NBA)",
    "category": "Sports",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.balldontlie.io",
    "pricing_url": "https://docs.balldontlie.io/",
    "documentation_url": "https://www.balldontlie.io",
    "free_tier": {
      "has_free_tier": true,
      "type": "free-api-key",
      "details": "Free account tier provides API access for selected NBA data.",
      "amount": "5 requests/minute",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key from a free account.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Free tier: 5 requests/minute.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "scores/live events",
      "fixtures/schedules",
      "teams and players",
      "standings",
      "statistics",
      "league/competition data"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://www.balldontlie.io",
      "source_1": "https://www.balldontlie.io",
      "source_2": "https://www.balldontlie.io",
      "source_3": "https://docs.balldontlie.io/"
    }
  },
  {
    "name": "football-data.org",
    "category": "Sports",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.football-data.org/client/register",
    "pricing_url": "https://www.football-data.org/pricing",
    "documentation_url": "https://www.football-data.org/client/register",
    "free_tier": {
      "has_free_tier": true,
      "type": "free-api-key",
      "details": "Free plan is free forever and provides delayed football data.",
      "amount": "10 calls/minute; 12 competitions",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Registered API client/token.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Free registered clients: 10 requests/minute.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "scores/live events",
      "fixtures/schedules",
      "teams and players",
      "standings",
      "statistics",
      "league/competition data"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://www.football-data.org/client/register",
      "source_1": "https://www.football-data.org/client/register",
      "source_2": "https://www.football-data.org/client/register",
      "source_3": "https://www.football-data.org/pricing"
    }
  },
  {
    "name": "Sportradar",
    "category": "Sports",
    "description": "Cataloged API provider.",
    "signup_url": "https://developer.sportradar.com",
    "pricing_url": "https://developer.sportradar.com/getting-started/docs/your-account",
    "documentation_url": "https://developer.sportradar.com",
    "free_tier": {
      "has_free_tier": true,
      "type": "free-trial",
      "details": "Marketplace products can be registered for a 30-day trial with trial quotas.",
      "amount": "Default trial: 1,000 requests over a rolling 30 days and 1 QPS",
      "expiry": "30 days"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key for the subscribed product.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Default trial: 1 QPS and 1,000 requests/rolling 30 days.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "scores/live events",
      "fixtures/schedules",
      "teams and players",
      "standings",
      "statistics",
      "league/competition data"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://developer.sportradar.com",
      "source_1": "https://developer.sportradar.com",
      "source_2": "https://developer.sportradar.com",
      "source_3": "https://developer.sportradar.com/getting-started/docs/your-account"
    }
  },
  {
    "name": "TheSportsDB",
    "category": "Sports",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.thesportsdb.com/api.php",
    "pricing_url": "https://www.thesportsdb.com/api.php",
    "documentation_url": "https://www.thesportsdb.com/api.php",
    "free_tier": {
      "has_free_tier": true,
      "type": "free-api-key",
      "details": "Free v1 API is available with the public key 123; premium adds higher limits and v2.",
      "amount": "Free v1 access; exact method-specific limits apply",
      "expiry": "Unavailable"
    },
    "requires_credit_card": false,
    "authentication": "Numeric v1 API key in the URL; premium v2 uses header authentication.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Method-specific limits; free v1 is intentionally limited.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "scores/live events",
      "fixtures/schedules",
      "teams and players",
      "standings",
      "statistics",
      "league/competition data"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://www.thesportsdb.com/api.php",
      "source_1": "https://www.thesportsdb.com/api.php",
      "source_2": "https://www.thesportsdb.com/api.php",
      "source_3": "https://www.thesportsdb.com/api.php"
    }
  },
  {
    "name": "API-Baseball",
    "category": "Sports (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.api-baseball.com",
    "pricing_url": "https://www.api-baseball.com",
    "documentation_url": "https://www.api-baseball.com",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Unavailable in the official source reviewed; no free-tier claim is made.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "scores/live events",
      "fixtures/schedules",
      "teams and players",
      "standings",
      "statistics",
      "league/competition data"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://www.api-baseball.com",
      "source_1": "https://www.api-baseball.com",
      "source_2": "https://www.api-baseball.com"
    }
  },
  {
    "name": "API-Basketball",
    "category": "Sports (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.api-basketball.com",
    "pricing_url": "https://www.api-basketball.com",
    "documentation_url": "https://www.api-basketball.com",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Unavailable in the official source reviewed; no free-tier claim is made.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "scores/live events",
      "fixtures/schedules",
      "teams and players",
      "standings",
      "statistics",
      "league/competition data"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://www.api-basketball.com",
      "source_1": "https://www.api-basketball.com",
      "source_2": "https://www.api-basketball.com"
    }
  },
  {
    "name": "MySportsFeeds",
    "category": "Sports (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.mysportsfeeds.com",
    "pricing_url": "https://www.mysportsfeeds.com",
    "documentation_url": "https://www.mysportsfeeds.com",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Unavailable in the official source reviewed; no free-tier claim is made.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "scores/live events",
      "fixtures/schedules",
      "teams and players",
      "standings",
      "statistics",
      "league/competition data"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://www.mysportsfeeds.com",
      "source_1": "https://www.mysportsfeeds.com",
      "source_2": "https://www.mysportsfeeds.com"
    }
  },
  {
    "name": "SportsDataIO",
    "category": "Sports (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://sportsdata.io",
    "pricing_url": "https://sportsdata.io/developers/apis",
    "documentation_url": "https://sportsdata.io",
    "free_tier": {
      "has_free_tier": true,
      "type": "free-trial",
      "details": "SportsDataIO provides a free trial using scrambled data and a separate free tier in Discovery Lab for last-season data.",
      "amount": "Free trial and free Discovery Lab tier; exact quota varies by product",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API credentials.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Product-specific.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "scores/live events",
      "fixtures/schedules",
      "teams and players",
      "standings",
      "statistics",
      "league/competition data"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://sportsdata.io",
      "source_1": "https://sportsdata.io",
      "source_2": "https://sportsdata.io",
      "source_3": "https://sportsdata.io/developers/apis"
    }
  },
  {
    "name": "Amazon Translate",
    "category": "Translation (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://aws.amazon.com/translate/",
    "pricing_url": "https://aws.amazon.com/translate/",
    "documentation_url": "https://aws.amazon.com/translate/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Unavailable in the official source reviewed; no free-tier claim is made.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "text translation",
      "language detection",
      "multilingual localization",
      "document translation where offered",
      "glossaries/terminology where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://aws.amazon.com/translate/",
      "source_1": "https://aws.amazon.com/translate/",
      "source_2": "https://aws.amazon.com/translate/"
    }
  },
  {
    "name": "IBM Watson Language Translator",
    "category": "Translation (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.ibm.com/products/natural-language-understanding",
    "pricing_url": "https://www.ibm.com/products/natural-language-understanding",
    "documentation_url": "https://www.ibm.com/products/natural-language-understanding",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Unavailable in the official source reviewed; no free-tier claim is made.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "text translation",
      "language detection",
      "multilingual localization",
      "document translation where offered",
      "glossaries/terminology where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://www.ibm.com/products/natural-language-understanding",
      "source_1": "https://www.ibm.com/products/natural-language-understanding",
      "source_2": "https://www.ibm.com/products/natural-language-understanding"
    }
  },
  {
    "name": "Systran",
    "category": "Translation (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.systran.net",
    "pricing_url": "https://www.systran.net",
    "documentation_url": "https://www.systran.net",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Unavailable in the official source reviewed; no free-tier claim is made.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "text translation",
      "language detection",
      "multilingual localization",
      "document translation where offered",
      "glossaries/terminology where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://www.systran.net",
      "source_1": "https://www.systran.net",
      "source_2": "https://www.systran.net"
    }
  },
  {
    "name": "DeepL API",
    "category": "Translation / Language",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.deepl.com/en/pro-api",
    "pricing_url": "https://support.deepl.com/hc/en-us/articles/360020685720-Usage-count-and-billing-in-DeepL-API",
    "documentation_url": "https://www.deepl.com/en/pro-api",
    "free_tier": {
      "has_free_tier": true,
      "type": "monthly-characters",
      "details": "DeepL API Free allows up to 500,000 characters per month.",
      "amount": "500,000 characters/month",
      "expiry": "Monthly"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Plan-specific.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "text translation",
      "language detection",
      "multilingual localization",
      "document translation where offered",
      "glossaries/terminology where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://www.deepl.com/en/pro-api",
      "source_1": "https://www.deepl.com/en/pro-api",
      "source_2": "https://www.deepl.com/en/pro-api",
      "source_3": "https://support.deepl.com/hc/en-us/articles/360020685720-Usage-count-and-billing-in-DeepL-API"
    }
  },
  {
    "name": "Google Cloud Translation",
    "category": "Translation / Language",
    "description": "Cataloged API provider.",
    "signup_url": "https://console.cloud.google.com/apis/library/translate.googleapis.com",
    "pricing_url": "https://cloud.google.com/products/translate/pricing",
    "documentation_url": "https://console.cloud.google.com/apis/library/translate.googleapis.com",
    "free_tier": {
      "has_free_tier": true,
      "type": "monthly-credit",
      "details": "Cloud Translation includes the first 500,000 characters per month free under the current pricing model.",
      "amount": "First 500,000 characters/month free",
      "expiry": "Monthly"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Google Cloud credentials/API key or OAuth as configured.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Quota and billing depend on Google Cloud project.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "text translation",
      "language detection",
      "multilingual localization",
      "document translation where offered",
      "glossaries/terminology where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://console.cloud.google.com/apis/library/translate.googleapis.com",
      "source_1": "https://console.cloud.google.com/apis/library/translate.googleapis.com",
      "source_2": "https://console.cloud.google.com/apis/library/translate.googleapis.com",
      "source_3": "https://cloud.google.com/products/translate/pricing"
    }
  },
  {
    "name": "LibreTranslate",
    "category": "Translation / Language",
    "description": "Cataloged API provider.",
    "signup_url": "https://portal.libretranslate.com",
    "pricing_url": "https://portal.libretranslate.com",
    "documentation_url": "https://portal.libretranslate.com",
    "free_tier": {
      "has_free_tier": "Unavailable",
      "type": "self-hosted",
      "details": "LibreTranslate is open-source and can be self-hosted; hosted service pricing varies by provider.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key for hosted instances; self-hosted deployments can be configured without one.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Instance-specific.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "text translation",
      "language detection",
      "multilingual localization",
      "document translation where offered",
      "glossaries/terminology where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://portal.libretranslate.com",
      "source_1": "https://portal.libretranslate.com",
      "source_2": "https://portal.libretranslate.com",
      "source_3": "https://portal.libretranslate.com"
    }
  },
  {
    "name": "Lingva/Yandex Translate",
    "category": "Translation / Language",
    "description": "Cataloged API provider.",
    "signup_url": "https://yandex.com/dev/translate/",
    "pricing_url": "https://yandex.com/dev/translate/",
    "documentation_url": "https://yandex.com/dev/translate/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Unavailable in the official source reviewed; no free-tier claim is made.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "text translation",
      "language detection",
      "multilingual localization",
      "document translation where offered",
      "glossaries/terminology where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://yandex.com/dev/translate/",
      "source_1": "https://yandex.com/dev/translate/",
      "source_2": "https://yandex.com/dev/translate/"
    }
  },
  {
    "name": "Microsoft Translator",
    "category": "Translation / Language",
    "description": "Cataloged API provider.",
    "signup_url": "https://azure.microsoft.com/en-us/products/ai-services/ai-translator",
    "pricing_url": "https://azure.microsoft.com/en-in/pricing/details/translator/",
    "documentation_url": "https://azure.microsoft.com/en-us/products/ai-services/ai-translator",
    "free_tier": {
      "has_free_tier": true,
      "type": "monthly-character-quota",
      "details": "Azure Translator F0 tier includes 2 million characters of standard/custom translation per month free.",
      "amount": "2 million characters/month",
      "expiry": "Monthly"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Azure resource key or supported Azure authentication.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Azure service quota/rate limits apply.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "text translation",
      "language detection",
      "multilingual localization",
      "document translation where offered",
      "glossaries/terminology where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://azure.microsoft.com/en-us/products/ai-services/ai-translator",
      "source_1": "https://azure.microsoft.com/en-us/products/ai-services/ai-translator",
      "source_2": "https://azure.microsoft.com/en-us/products/ai-services/ai-translator",
      "source_3": "https://azure.microsoft.com/en-in/pricing/details/translator/"
    }
  },
  {
    "name": "AeroDataBox",
    "category": "Travel / Transportation",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.aerodatabox.com",
    "pricing_url": "https://aerodatabox.com/pricing/",
    "documentation_url": "https://www.aerodatabox.com",
    "free_tier": {
      "has_free_tier": true,
      "type": "trial-or-credit",
      "details": "Current pricing includes a free Basic 7-day trial and free direct use through data contribution.",
      "amount": "400 API units on Basic trial; direct credits can be earned through data contribution",
      "expiry": "7-day trial; contribution credits do not expire"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Basic trial: 1 request/sec.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "travel search",
      "flight/hotel/transport data",
      "availability/pricing where permitted",
      "routes/itineraries",
      "airport/location data"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://www.aerodatabox.com",
      "source_1": "https://www.aerodatabox.com",
      "source_2": "https://www.aerodatabox.com",
      "source_3": "https://aerodatabox.com/pricing/"
    }
  },
  {
    "name": "Amadeus for Developers",
    "category": "Travel / Transportation",
    "description": "Cataloged API provider.",
    "signup_url": "https://developers.amadeus.com",
    "pricing_url": "https://developers.amadeus.com",
    "documentation_url": "https://developers.amadeus.com",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Unavailable in the official source reviewed; no free-tier claim is made.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "travel search",
      "flight/hotel/transport data",
      "availability/pricing where permitted",
      "routes/itineraries",
      "airport/location data"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://developers.amadeus.com",
      "source_1": "https://developers.amadeus.com",
      "source_2": "https://developers.amadeus.com"
    }
  },
  {
    "name": "Aviationstack",
    "category": "Travel / Transportation",
    "description": "Cataloged API provider.",
    "signup_url": "https://aviationstack.com",
    "pricing_url": "https://aviationstack.com/pricing",
    "documentation_url": "https://aviationstack.com",
    "free_tier": {
      "has_free_tier": true,
      "type": "free-monthly",
      "details": "Free plan includes real-time aviation data for personal/non-commercial use.",
      "amount": "100 requests/month",
      "expiry": "Monthly"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API access key.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Plan-specific.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "travel search",
      "flight/hotel/transport data",
      "availability/pricing where permitted",
      "routes/itineraries",
      "airport/location data"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://aviationstack.com",
      "source_1": "https://aviationstack.com",
      "source_2": "https://aviationstack.com",
      "source_3": "https://aviationstack.com/pricing"
    }
  },
  {
    "name": "Booking.com API",
    "category": "Travel / Transportation",
    "description": "Cataloged API provider.",
    "signup_url": "https://developers.booking.com",
    "pricing_url": "https://developers.booking.com",
    "documentation_url": "https://developers.booking.com",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Unavailable in the official source reviewed; no free-tier claim is made.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "travel search",
      "flight/hotel/transport data",
      "availability/pricing where permitted",
      "routes/itineraries",
      "airport/location data"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://developers.booking.com",
      "source_1": "https://developers.booking.com",
      "source_2": "https://developers.booking.com"
    }
  },
  {
    "name": "Lyft API",
    "category": "Travel / Transportation",
    "description": "Cataloged API provider.",
    "signup_url": "https://developer.lyft.com",
    "pricing_url": "https://developer.lyft.com",
    "documentation_url": "https://developer.lyft.com",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Unavailable in the official source reviewed; no free-tier claim is made.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "travel search",
      "flight/hotel/transport data",
      "availability/pricing where permitted",
      "routes/itineraries",
      "airport/location data"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://developer.lyft.com",
      "source_1": "https://developer.lyft.com",
      "source_2": "https://developer.lyft.com"
    }
  },
  {
    "name": "Rome2Rio API",
    "category": "Travel / Transportation",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.rome2rio.com/documentation",
    "pricing_url": "https://www.rome2rio.com/documentation",
    "documentation_url": "https://www.rome2rio.com/documentation",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Unavailable in the official source reviewed; no free-tier claim is made.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "travel search",
      "flight/hotel/transport data",
      "availability/pricing where permitted",
      "routes/itineraries",
      "airport/location data"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://www.rome2rio.com/documentation",
      "source_1": "https://www.rome2rio.com/documentation",
      "source_2": "https://www.rome2rio.com/documentation"
    }
  },
  {
    "name": "Skyscanner API",
    "category": "Travel / Transportation",
    "description": "Cataloged API provider.",
    "signup_url": "https://developers.skyscanner.net",
    "pricing_url": "https://developers.skyscanner.net/docs/getting-started/authentication",
    "documentation_url": "https://developers.skyscanner.net",
    "free_tier": {
      "has_free_tier": "Unavailable",
      "type": "partner-access",
      "details": "API keys require a partnership application and approval; no public free-tier quota is stated in the current docs.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key in x-api-key header after partnership approval.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Application-specific.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "travel search",
      "flight/hotel/transport data",
      "availability/pricing where permitted",
      "routes/itineraries",
      "airport/location data"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://developers.skyscanner.net",
      "source_1": "https://developers.skyscanner.net",
      "source_2": "https://developers.skyscanner.net",
      "source_3": "https://developers.skyscanner.net/docs/getting-started/authentication"
    }
  },
  {
    "name": "TripAdvisor Content API",
    "category": "Travel / Transportation",
    "description": "Cataloged API provider.",
    "signup_url": "https://tripadvisor-content-api.readme.io",
    "pricing_url": "https://tripadvisor-content-api.readme.io/reference/overview",
    "documentation_url": "https://tripadvisor-content-api.readme.io",
    "free_tier": {
      "has_free_tier": false,
      "type": "usage-based",
      "details": "Current documentation describes a pay-only-for-what-you-use partner API and points new applicants to the newer Terra platform.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Partner API credentials.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Up to 50 calls/sec stated in current documentation.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "travel search",
      "flight/hotel/transport data",
      "availability/pricing where permitted",
      "routes/itineraries",
      "airport/location data"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://tripadvisor-content-api.readme.io",
      "source_1": "https://tripadvisor-content-api.readme.io",
      "source_2": "https://tripadvisor-content-api.readme.io",
      "source_3": "https://tripadvisor-content-api.readme.io/reference/overview"
    }
  },
  {
    "name": "Uber API",
    "category": "Travel / Transportation",
    "description": "Cataloged API provider.",
    "signup_url": "https://developer.uber.com",
    "pricing_url": "https://developer.uber.com/docs/drivers/references/api",
    "documentation_url": "https://developer.uber.com",
    "free_tier": {
      "has_free_tier": "Unavailable",
      "type": "restricted-access",
      "details": "Current documentation describes limited/approval-based access for some APIs and a sandbox for development.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "OAuth 2.0 and app credentials for supported endpoints.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Endpoint-specific.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "travel search",
      "flight/hotel/transport data",
      "availability/pricing where permitted",
      "routes/itineraries",
      "airport/location data"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://developer.uber.com",
      "source_1": "https://developer.uber.com",
      "source_2": "https://developer.uber.com",
      "source_3": "https://developer.uber.com/docs/drivers/references/api"
    }
  },
  {
    "name": "Mux API",
    "category": "Video / Streaming",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.mux.com",
    "pricing_url": "https://www.mux.com/pricing",
    "documentation_url": "https://www.mux.com",
    "free_tier": {
      "has_free_tier": true,
      "type": "free-plan",
      "details": "Mux has a free plan with monthly delivery minutes and no credit card required to start.",
      "amount": "100,000 free monthly delivery minutes; up to 10 stored videos on Free",
      "expiry": "Monthly"
    },
    "requires_credit_card": false,
    "authentication": "Mux access token.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Plan-specific.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "video metadata",
      "upload/management",
      "playback/streaming",
      "channels/users",
      "comments or engagement data",
      "analytics where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://www.mux.com",
      "source_1": "https://www.mux.com",
      "source_2": "https://www.mux.com",
      "source_3": "https://www.mux.com/pricing"
    }
  },
  {
    "name": "Twitch API",
    "category": "Video / Streaming",
    "description": "Cataloged API provider.",
    "signup_url": "https://dev.twitch.tv",
    "pricing_url": "https://dev.twitch.tv",
    "documentation_url": "https://dev.twitch.tv",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Unavailable in the official source reviewed; no free-tier claim is made.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "video metadata",
      "upload/management",
      "playback/streaming",
      "channels/users",
      "comments or engagement data",
      "analytics where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://dev.twitch.tv",
      "source_1": "https://dev.twitch.tv",
      "source_2": "https://dev.twitch.tv"
    }
  },
  {
    "name": "Vimeo API",
    "category": "Video / Streaming",
    "description": "Cataloged API provider.",
    "signup_url": "https://developer.vimeo.com",
    "pricing_url": "https://developer.vimeo.com",
    "documentation_url": "https://developer.vimeo.com",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Unavailable in the official source reviewed; no free-tier claim is made.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "video metadata",
      "upload/management",
      "playback/streaming",
      "channels/users",
      "comments or engagement data",
      "analytics where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://developer.vimeo.com",
      "source_1": "https://developer.vimeo.com",
      "source_2": "https://developer.vimeo.com"
    }
  },
  {
    "name": "YouTube Data API",
    "category": "Video / Streaming",
    "description": "Cataloged API provider.",
    "signup_url": "https://console.cloud.google.com/apis/library/youtube.googleapis.com",
    "pricing_url": "https://console.cloud.google.com/apis/library/youtube.googleapis.com",
    "documentation_url": "https://console.cloud.google.com/apis/library/youtube.googleapis.com",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Unavailable in the official source reviewed; no free-tier claim is made.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "video metadata",
      "upload/management",
      "playback/streaming",
      "channels/users",
      "comments or engagement data",
      "analytics where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://console.cloud.google.com/apis/library/youtube.googleapis.com",
      "source_1": "https://console.cloud.google.com/apis/library/youtube.googleapis.com",
      "source_2": "https://console.cloud.google.com/apis/library/youtube.googleapis.com"
    }
  },
  {
    "name": "AccuWeather API",
    "category": "Weather",
    "description": "Cataloged API provider.",
    "signup_url": "https://developer.accuweather.com",
    "pricing_url": "https://developer.accuweather.com/documentation/overview",
    "documentation_url": "https://developer.accuweather.com",
    "free_tier": {
      "has_free_tier": true,
      "type": "free-trial",
      "details": "Core Weather Free plan provides 500 daily calls for a 14-day trial.",
      "amount": "500 requests/day",
      "expiry": "14 days"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "500 requests/day during free trial.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "current conditions",
      "hourly/daily forecasts",
      "historical weather",
      "alerts",
      "location/weather lookup",
      "environmental data where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://developer.accuweather.com",
      "source_1": "https://developer.accuweather.com",
      "source_2": "https://developer.accuweather.com",
      "source_3": "https://developer.accuweather.com/documentation/overview"
    }
  },
  {
    "name": "Meteomatics",
    "category": "Weather",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.meteomatics.com/en/sign-up",
    "pricing_url": "https://www.meteomatics.com/en/sign-up",
    "documentation_url": "https://www.meteomatics.com/en/sign-up",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Unavailable in the official source reviewed; no free-tier claim is made.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "current conditions",
      "hourly/daily forecasts",
      "historical weather",
      "alerts",
      "location/weather lookup",
      "environmental data where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://www.meteomatics.com/en/sign-up",
      "source_1": "https://www.meteomatics.com/en/sign-up",
      "source_2": "https://www.meteomatics.com/en/sign-up"
    }
  },
  {
    "name": "NOAA Weather API",
    "category": "Weather",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.weather.gov/documentation/services-web-api",
    "pricing_url": "https://www.weather.gov/documentation/services-web-api",
    "documentation_url": "https://www.weather.gov/documentation/services-web-api",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Unavailable in the official source reviewed; no free-tier claim is made.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "current conditions",
      "hourly/daily forecasts",
      "historical weather",
      "alerts",
      "location/weather lookup",
      "environmental data where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://www.weather.gov/documentation/services-web-api",
      "source_1": "https://www.weather.gov/documentation/services-web-api",
      "source_2": "https://www.weather.gov/documentation/services-web-api"
    }
  },
  {
    "name": "OpenWeatherMap",
    "category": "Weather",
    "description": "Cataloged API provider.",
    "signup_url": "https://home.openweathermap.org/users/sign_up",
    "pricing_url": "https://home.openweathermap.org/users/sign_up",
    "documentation_url": "https://home.openweathermap.org/users/sign_up",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Unavailable in the official source reviewed; no free-tier claim is made.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "current conditions",
      "hourly/daily forecasts",
      "historical weather",
      "alerts",
      "location/weather lookup",
      "environmental data where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://home.openweathermap.org/users/sign_up",
      "source_1": "https://home.openweathermap.org/users/sign_up",
      "source_2": "https://home.openweathermap.org/users/sign_up"
    }
  },
  {
    "name": "Tomorrow\\.io",
    "category": "Weather",
    "description": "Cataloged API provider.",
    "signup_url": "https://app.tomorrow.io/signup",
    "pricing_url": "https://app.tomorrow.io/signup",
    "documentation_url": "https://app.tomorrow.io/signup",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Unavailable in the official source reviewed; no free-tier claim is made.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "current conditions",
      "hourly/daily forecasts",
      "historical weather",
      "alerts",
      "location/weather lookup",
      "environmental data where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://app.tomorrow.io/signup",
      "source_1": "https://app.tomorrow.io/signup",
      "source_2": "https://app.tomorrow.io/signup"
    }
  },
  {
    "name": "Visual Crossing",
    "category": "Weather",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.visualcrossing.com/sign-up",
    "pricing_url": "https://www.visualcrossing.com/weather-api/",
    "documentation_url": "https://www.visualcrossing.com/sign-up",
    "free_tier": {
      "has_free_tier": true,
      "type": "daily-records",
      "details": "Free Weather API access includes 1,000 weather records per day and no credit card is required.",
      "amount": "1,000 records/day",
      "expiry": "Daily"
    },
    "requires_credit_card": false,
    "authentication": "API key.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Plan-specific.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "current conditions",
      "hourly/daily forecasts",
      "historical weather",
      "alerts",
      "location/weather lookup",
      "environmental data where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://www.visualcrossing.com/sign-up",
      "source_1": "https://www.visualcrossing.com/sign-up",
      "source_2": "https://www.visualcrossing.com/sign-up",
      "source_3": "https://www.visualcrossing.com/weather-api/"
    }
  },
  {
    "name": "WeatherAPI.com",
    "category": "Weather",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.weatherapi.com/signup.aspx",
    "pricing_url": "https://www.weatherapi.com/pricing.aspx",
    "documentation_url": "https://www.weatherapi.com/signup.aspx",
    "free_tier": {
      "has_free_tier": true,
      "type": "free-monthly",
      "details": "Free plan provides real-time weather, 3-day forecasts and limited historical access.",
      "amount": "100,000 calls/month",
      "expiry": "Monthly"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Plan-specific.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "current conditions",
      "hourly/daily forecasts",
      "historical weather",
      "alerts",
      "location/weather lookup",
      "environmental data where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://www.weatherapi.com/signup.aspx",
      "source_1": "https://www.weatherapi.com/signup.aspx",
      "source_2": "https://www.weatherapi.com/signup.aspx",
      "source_3": "https://www.weatherapi.com/pricing.aspx"
    }
  },
  {
    "name": "Weatherbit",
    "category": "Weather",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.weatherbit.io/account/create",
    "pricing_url": "https://cdn.weatherbit.io/pricing",
    "documentation_url": "https://www.weatherbit.io/account/create",
    "free_tier": {
      "has_free_tier": true,
      "type": "free-trial-and-plan",
      "details": "Current pricing lists a free plan and a 21-day free trial.",
      "amount": "50 requests/day on Free; trial available",
      "expiry": "Daily; trial 21 days"
    },
    "requires_credit_card": false,
    "authentication": "API key.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Free plan: 1 request/sec.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "current conditions",
      "hourly/daily forecasts",
      "historical weather",
      "alerts",
      "location/weather lookup",
      "environmental data where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://www.weatherbit.io/account/create",
      "source_1": "https://www.weatherbit.io/account/create",
      "source_2": "https://www.weatherbit.io/account/create",
      "source_3": "https://cdn.weatherbit.io/pricing"
    }
  },
  {
    "name": "Ambee (environment)",
    "category": "Weather (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.getambee.com",
    "pricing_url": "https://www.getambee.com",
    "documentation_url": "https://www.getambee.com",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Unavailable in the official source reviewed; no free-tier claim is made.",
      "amount": "Unavailable",
      "expiry": "Unavailable"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "Unavailable",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Unavailable",
    "free_tier_reset": "Unavailable",
    "uses": [
      "current conditions",
      "hourly/daily forecasts",
      "historical weather",
      "alerts",
      "location/weather lookup",
      "environmental data where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://www.getambee.com",
      "source_1": "https://www.getambee.com",
      "source_2": "https://www.getambee.com"
    }
  },
  {
    "name": "Foreca",
    "category": "Weather (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://developer.foreca.com",
    "pricing_url": "https://business.foreca.com/weather-api/pricing",
    "documentation_url": "https://developer.foreca.com",
    "free_tier": {
      "has_free_tier": true,
      "type": "freemium-or-trial",
      "details": "Foreca offers a free 30-day trial and a Freemium personal-use plan.",
      "amount": "2,000 requests/day",
      "expiry": "Trial 30 days; Freemium deactivates after 30 days idle"
    },
    "requires_credit_card": false,
    "authentication": "API key created after signup.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "2,000 requests/day; QPS 10 for Freemium.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "current conditions",
      "hourly/daily forecasts",
      "historical weather",
      "alerts",
      "location/weather lookup",
      "environmental data where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://developer.foreca.com",
      "source_1": "https://developer.foreca.com",
      "source_2": "https://developer.foreca.com",
      "source_3": "https://business.foreca.com/weather-api/pricing"
    }
  },
  {
    "name": "Meteoblue",
    "category": "Weather (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.meteoblue.com/en/weather-api",
    "pricing_url": "https://business.meteoblue.com/products/weather-apis/free-weather-api",
    "documentation_url": "https://www.meteoblue.com/en/weather-api",
    "free_tier": {
      "has_free_tier": true,
      "type": "annual-free",
      "details": "Free Weather API provides a subset of forecast data with 10 million credits.",
      "amount": "10 million credits",
      "expiry": "1 year"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API key.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Typically 500 calls/minute unless otherwise agreed.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "current conditions",
      "hourly/daily forecasts",
      "historical weather",
      "alerts",
      "location/weather lookup",
      "environmental data where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://www.meteoblue.com/en/weather-api",
      "source_1": "https://www.meteoblue.com/en/weather-api",
      "source_2": "https://www.meteoblue.com/en/weather-api",
      "source_3": "https://business.meteoblue.com/products/weather-apis/free-weather-api"
    }
  },
  {
    "name": "Open-Meteo",
    "category": "Weather (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://open-meteo.com",
    "pricing_url": "https://open-meteo.com/",
    "documentation_url": "https://open-meteo.com",
    "free_tier": {
      "has_free_tier": true,
      "type": "keyless-free",
      "details": "No API key, signup, or credit card is required for non-commercial use.",
      "amount": "Up to 10,000 calls/day; 5,000/hour; 600/minute",
      "expiry": "Daily/hourly/minute limits"
    },
    "requires_credit_card": false,
    "authentication": "No authentication required for the free API.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "10,000/day, 5,000/hour, 600/minute for free non-commercial use.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "current conditions",
      "hourly/daily forecasts",
      "historical weather",
      "alerts",
      "location/weather lookup",
      "environmental data where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://open-meteo.com",
      "source_1": "https://open-meteo.com",
      "source_2": "https://open-meteo.com",
      "source_3": "https://open-meteo.com/"
    }
  },
  {
    "name": "StormGlass (marine)",
    "category": "Weather (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://stormglass.io",
    "pricing_url": "https://stormglass.io/pricing/",
    "documentation_url": "https://stormglass.io",
    "free_tier": {
      "has_free_tier": true,
      "type": "daily-free",
      "details": "Free plan provides all weather parameters for non-commercial use.",
      "amount": "10 requests/day",
      "expiry": "Daily"
    },
    "requires_credit_card": false,
    "authentication": "API key generated from the user dashboard.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "10 requests/day on Free.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "current conditions",
      "hourly/daily forecasts",
      "historical weather",
      "alerts",
      "location/weather lookup",
      "environmental data where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://stormglass.io",
      "source_1": "https://stormglass.io",
      "source_2": "https://stormglass.io",
      "source_3": "https://stormglass.io/pricing/"
    }
  },
  {
    "name": "Weatherstack",
    "category": "Weather (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://weatherstack.com",
    "pricing_url": "https://weatherstack.com/pricing",
    "documentation_url": "https://weatherstack.com",
    "free_tier": {
      "has_free_tier": true,
      "type": "free-forever",
      "details": "Free plan provides real-time weather for non-commercial use.",
      "amount": "100 calls/month",
      "expiry": "Monthly"
    },
    "requires_credit_card": "Unavailable",
    "authentication": "API access key.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Plan-specific.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "current conditions",
      "hourly/daily forecasts",
      "historical weather",
      "alerts",
      "location/weather lookup",
      "environmental data where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://weatherstack.com",
      "source_1": "https://weatherstack.com",
      "source_2": "https://weatherstack.com",
      "source_3": "https://weatherstack.com/pricing"
    }
  },
  {
    "name": "Xweather (Aeris)",
    "category": "Weather (additional)",
    "description": "Cataloged API provider.",
    "signup_url": "https://www.xweather.com",
    "pricing_url": "https://www.xweather.com/products/weather-api",
    "documentation_url": "https://www.xweather.com",
    "free_tier": {
      "has_free_tier": true,
      "type": "monthly-access",
      "details": "Weather API free tier includes 15,000 accesses per month.",
      "amount": "15,000 accesses/month",
      "expiry": "Monthly"
    },
    "requires_credit_card": false,
    "authentication": "API client credentials/API key.",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unavailable",
    "self_hostable": "Unavailable",
    "webhooks": "Unavailable",
    "rate_limit": "Endpoint-specific.",
    "free_tier_reset": "Unavailable",
    "uses": [
      "current conditions",
      "hourly/daily forecasts",
      "historical weather",
      "alerts",
      "location/weather lookup",
      "environmental data where offered"
    ],
    "last_verified": "2026-09-25",
    "verified_by": "manual-official-source-review",
    "status": "active",
    "verification_status": "manually-reviewed",
    "verification_sources": {
      "provider": "https://www.xweather.com",
      "source_1": "https://www.xweather.com",
      "source_2": "https://www.xweather.com",
      "source_3": "https://www.xweather.com/products/weather-api"
    }
  },
  {
    "name": "Cerebras",
    "category": "AI / LLM",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://cloud.cerebras.ai/",
    "pricing_url": "https://cloud.cerebras.ai/",
    "documentation_url": "https://cloud.cerebras.ai/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "ultra-fast LLM inference"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://cloud.cerebras.ai/"
    }
  },
  {
    "name": "SambaNova Cloud",
    "category": "AI / LLM",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://cloud.sambanova.ai/",
    "pricing_url": "https://cloud.sambanova.ai/",
    "documentation_url": "https://cloud.sambanova.ai/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "LLM inference"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://cloud.sambanova.ai/"
    }
  },
  {
    "name": "AI21 Labs Studio",
    "category": "AI / LLM",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://studio.ai21.com/account/api-key",
    "pricing_url": "https://studio.ai21.com/account/api-key",
    "documentation_url": "https://studio.ai21.com/account/api-key",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "LLM",
      "text generation"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://studio.ai21.com/account/api-key"
    }
  },
  {
    "name": "Writer API",
    "category": "AI / LLM",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://dev.writer.com/",
    "pricing_url": "https://dev.writer.com/",
    "documentation_url": "https://dev.writer.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "enterprise LLM"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://dev.writer.com/"
    }
  },
  {
    "name": "FriendliAI",
    "category": "AI / LLM",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://friendli.ai/",
    "pricing_url": "https://friendli.ai/",
    "documentation_url": "https://friendli.ai/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "LLM inference"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://friendli.ai/"
    }
  },
  {
    "name": "Lepton AI",
    "category": "AI / LLM",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://dashboard.lepton.ai/",
    "pricing_url": "https://dashboard.lepton.ai/",
    "documentation_url": "https://dashboard.lepton.ai/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "model inference"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://dashboard.lepton.ai/"
    }
  },
  {
    "name": "Novita AI",
    "category": "AI / LLM",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://novita.ai/settings/key-management",
    "pricing_url": "https://novita.ai/settings/key-management",
    "documentation_url": "https://novita.ai/settings/key-management",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "LLM",
      "image generation"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://novita.ai/settings/key-management"
    }
  },
  {
    "name": "SiliconFlow",
    "category": "AI / LLM",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://cloud.siliconflow.cn/account/ak",
    "pricing_url": "https://cloud.siliconflow.cn/account/ak",
    "documentation_url": "https://cloud.siliconflow.cn/account/ak",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "LLM inference"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://cloud.siliconflow.cn/account/ak"
    }
  },
  {
    "name": "ModelScope",
    "category": "AI / ML",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://modelscope.cn/",
    "pricing_url": "https://modelscope.cn/",
    "documentation_url": "https://modelscope.cn/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "models",
      "inference"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://modelscope.cn/"
    }
  },
  {
    "name": "Zhipu AI/Z.ai",
    "category": "AI / LLM",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://open.bigmodel.cn/",
    "pricing_url": "https://open.bigmodel.cn/",
    "documentation_url": "https://open.bigmodel.cn/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "LLM"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://open.bigmodel.cn/"
    }
  },
  {
    "name": "Baichuan AI",
    "category": "AI / LLM",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://platform.baichuan-ai.com/",
    "pricing_url": "https://platform.baichuan-ai.com/",
    "documentation_url": "https://platform.baichuan-ai.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "LLM"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://platform.baichuan-ai.com/"
    }
  },
  {
    "name": "Moonshot AI",
    "category": "AI / LLM",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://platform.moonshot.cn/console/api-keys",
    "pricing_url": "https://platform.moonshot.cn/console/api-keys",
    "documentation_url": "https://platform.moonshot.cn/console/api-keys",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "Kimi LLM"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://platform.moonshot.cn/console/api-keys"
    }
  },
  {
    "name": "MiniMax",
    "category": "AI / LLM",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://platform.minimaxi.com/",
    "pricing_url": "https://platform.minimaxi.com/",
    "documentation_url": "https://platform.minimaxi.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "text audio",
      "video AI"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://platform.minimaxi.com/"
    }
  },
  {
    "name": "Yi/01.AI",
    "category": "AI / LLM",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://platform.lingyiwanwu.com/",
    "pricing_url": "https://platform.lingyiwanwu.com/",
    "documentation_url": "https://platform.lingyiwanwu.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "LLM"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://platform.lingyiwanwu.com/"
    }
  },
  {
    "name": "Baidu Qianfan",
    "category": "AI / LLM",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://console.bce.baidu.com/qianfan/",
    "pricing_url": "https://console.bce.baidu.com/qianfan/",
    "documentation_url": "https://console.bce.baidu.com/qianfan/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "LLM platform"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://console.bce.baidu.com/qianfan/"
    }
  },
  {
    "name": "Alibaba DashScope",
    "category": "AI / LLM",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://dashscope.console.aliyun.com/apiKey",
    "pricing_url": "https://dashscope.console.aliyun.com/apiKey",
    "documentation_url": "https://dashscope.console.aliyun.com/apiKey",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "Qwen",
      "multimodal AI"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://dashscope.console.aliyun.com/apiKey"
    }
  },
  {
    "name": "Tencent Hunyuan",
    "category": "AI / LLM",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://console.cloud.tencent.com/hunyuan",
    "pricing_url": "https://console.cloud.tencent.com/hunyuan",
    "documentation_url": "https://console.cloud.tencent.com/hunyuan",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "LLM"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://console.cloud.tencent.com/hunyuan"
    }
  },
  {
    "name": "Zhipu CogView",
    "category": "AI / Generative Media",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://open.bigmodel.cn/",
    "pricing_url": "https://open.bigmodel.cn/",
    "documentation_url": "https://open.bigmodel.cn/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "image generation"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://open.bigmodel.cn/"
    }
  },
  {
    "name": "Ideogram API",
    "category": "AI / Generative Media",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://ideogram.ai/",
    "pricing_url": "https://ideogram.ai/",
    "documentation_url": "https://ideogram.ai/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "image generation"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://ideogram.ai/"
    }
  },
  {
    "name": "Leonardo AI API",
    "category": "AI / Generative Media",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://app.leonardo.ai/",
    "pricing_url": "https://app.leonardo.ai/",
    "documentation_url": "https://app.leonardo.ai/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "image generation"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://app.leonardo.ai/"
    }
  },
  {
    "name": "Stability AI Platform",
    "category": "AI / Generative Media",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://platform.stability.ai/account/keys",
    "pricing_url": "https://platform.stability.ai/account/keys",
    "documentation_url": "https://platform.stability.ai/account/keys",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "image",
      "video generation"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://platform.stability.ai/account/keys"
    }
  },
  {
    "name": "Black Forest Labs",
    "category": "AI / Generative Media",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://api.bfl.ai/",
    "pricing_url": "https://api.bfl.ai/",
    "documentation_url": "https://api.bfl.ai/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "FLUX image generation"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://api.bfl.ai/"
    }
  },
  {
    "name": "Luma AI",
    "category": "AI / Generative Media",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://lumalabs.ai/dream-machine/api",
    "pricing_url": "https://lumalabs.ai/dream-machine/api",
    "documentation_url": "https://lumalabs.ai/dream-machine/api",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "video generation"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://lumalabs.ai/dream-machine/api"
    }
  },
  {
    "name": "Runway API",
    "category": "AI / Generative Media",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://dev.runwayml.com/",
    "pricing_url": "https://dev.runwayml.com/",
    "documentation_url": "https://dev.runwayml.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "video generation"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://dev.runwayml.com/"
    }
  },
  {
    "name": "Cartesia",
    "category": "AI / Speech",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://play.cartesia.ai/",
    "pricing_url": "https://play.cartesia.ai/",
    "documentation_url": "https://play.cartesia.ai/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "voice generation"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://play.cartesia.ai/"
    }
  },
  {
    "name": "PlayHT",
    "category": "AI / Speech",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://play.ht/",
    "pricing_url": "https://play.ht/",
    "documentation_url": "https://play.ht/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "text to speech"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://play.ht/"
    }
  },
  {
    "name": "Resemble AI",
    "category": "AI / Speech",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://app.resemble.ai/",
    "pricing_url": "https://app.resemble.ai/",
    "documentation_url": "https://app.resemble.ai/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "voice generation"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://app.resemble.ai/"
    }
  },
  {
    "name": "AssemblyAI Universal",
    "category": "AI / Speech",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.assemblyai.com/dashboard/signup",
    "pricing_url": "https://www.assemblyai.com/dashboard/signup",
    "documentation_url": "https://www.assemblyai.com/dashboard/signup",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "speech to text"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.assemblyai.com/dashboard/signup"
    }
  },
  {
    "name": "Speechmatics",
    "category": "AI / Speech",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://portal.speechmatics.com/",
    "pricing_url": "https://portal.speechmatics.com/",
    "documentation_url": "https://portal.speechmatics.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "speech recognition"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://portal.speechmatics.com/"
    }
  },
  {
    "name": "Soniox",
    "category": "AI / Speech",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://soniox.com/",
    "pricing_url": "https://soniox.com/",
    "documentation_url": "https://soniox.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "speech to text"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://soniox.com/"
    }
  },
  {
    "name": "LangSmith",
    "category": "AI Observability & Evaluation",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://smith.langchain.com/",
    "pricing_url": "https://smith.langchain.com/",
    "documentation_url": "https://smith.langchain.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "LLM tracing"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://smith.langchain.com/"
    }
  },
  {
    "name": "Langfuse Cloud",
    "category": "AI Observability & Evaluation",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://cloud.langfuse.com/",
    "pricing_url": "https://cloud.langfuse.com/",
    "documentation_url": "https://cloud.langfuse.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "LLM tracing"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://cloud.langfuse.com/"
    }
  },
  {
    "name": "Helicone",
    "category": "AI Observability & Evaluation",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://helicone.ai/",
    "pricing_url": "https://helicone.ai/",
    "documentation_url": "https://helicone.ai/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "LLM monitoring"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://helicone.ai/"
    }
  },
  {
    "name": "Portkey",
    "category": "AI Agents & Infrastructure",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://app.portkey.ai/",
    "pricing_url": "https://app.portkey.ai/",
    "documentation_url": "https://app.portkey.ai/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "AI gateway"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://app.portkey.ai/"
    }
  },
  {
    "name": "LiteLLM",
    "category": "AI Agents & Infrastructure",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://github.com/BerriAI/litellm",
    "pricing_url": "https://github.com/BerriAI/litellm",
    "documentation_url": "https://github.com/BerriAI/litellm",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "model routing"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://github.com/BerriAI/litellm"
    }
  },
  {
    "name": "AgentOps",
    "category": "AI Observability & Evaluation",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://app.agentops.ai/",
    "pricing_url": "https://app.agentops.ai/",
    "documentation_url": "https://app.agentops.ai/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "agent monitoring"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://app.agentops.ai/"
    }
  },
  {
    "name": "Braintrust",
    "category": "AI Observability & Evaluation",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.braintrust.dev/",
    "pricing_url": "https://www.braintrust.dev/",
    "documentation_url": "https://www.braintrust.dev/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "LLM evaluation"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.braintrust.dev/"
    }
  },
  {
    "name": "Arize Phoenix",
    "category": "AI Observability & Evaluation",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://phoenix.arize.com/",
    "pricing_url": "https://phoenix.arize.com/",
    "documentation_url": "https://phoenix.arize.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "AI tracing"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://phoenix.arize.com/"
    }
  },
  {
    "name": "Weights & Biases",
    "category": "ML & Data Science",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://wandb.ai/authorize",
    "pricing_url": "https://wandb.ai/authorize",
    "documentation_url": "https://wandb.ai/authorize",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "ML experiments"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://wandb.ai/authorize"
    }
  },
  {
    "name": "Comet ML",
    "category": "ML & Data Science",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.comet.com/",
    "pricing_url": "https://www.comet.com/",
    "documentation_url": "https://www.comet.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "ML tracking"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.comet.com/"
    }
  },
  {
    "name": "Neptune AI",
    "category": "ML & Data Science",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://app.neptune.ai/",
    "pricing_url": "https://app.neptune.ai/",
    "documentation_url": "https://app.neptune.ai/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "experiment tracking"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://app.neptune.ai/"
    }
  },
  {
    "name": "ClearML",
    "category": "ML & Data Science",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://app.clear.ml/",
    "pricing_url": "https://app.clear.ml/",
    "documentation_url": "https://app.clear.ml/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "ML orchestration"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://app.clear.ml/"
    }
  },
  {
    "name": "Kubeflow",
    "category": "ML & Data Science",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.kubeflow.org/",
    "pricing_url": "https://www.kubeflow.org/",
    "documentation_url": "https://www.kubeflow.org/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "ML pipelines"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.kubeflow.org/"
    }
  },
  {
    "name": "Replicate Webhooks",
    "category": "AI Compute & GPU",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://replicate.com/account/api-tokens",
    "pricing_url": "https://replicate.com/account/api-tokens",
    "documentation_url": "https://replicate.com/account/api-tokens",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "model hosting"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://replicate.com/account/api-tokens"
    }
  },
  {
    "name": "Beam Cloud",
    "category": "AI Compute & GPU",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.beam.cloud/",
    "pricing_url": "https://www.beam.cloud/",
    "documentation_url": "https://www.beam.cloud/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "GPU serverless"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.beam.cloud/"
    }
  },
  {
    "name": "Baseten Truss",
    "category": "AI Compute & GPU",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.baseten.co/",
    "pricing_url": "https://www.baseten.co/",
    "documentation_url": "https://www.baseten.co/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "model deployment"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.baseten.co/"
    }
  },
  {
    "name": "Banana.dev",
    "category": "AI Compute & GPU",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://app.banana.dev/",
    "pricing_url": "https://app.banana.dev/",
    "documentation_url": "https://app.banana.dev/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "GPU inference"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://app.banana.dev/"
    }
  },
  {
    "name": "OctoAI",
    "category": "AI / LLM",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://octo.ai/",
    "pricing_url": "https://octo.ai/",
    "documentation_url": "https://octo.ai/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "LLM inference"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://octo.ai/"
    }
  },
  {
    "name": "Clarifai Workflows",
    "category": "Computer Vision & AI",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://clarifai.com/settings/security",
    "pricing_url": "https://clarifai.com/settings/security",
    "documentation_url": "https://clarifai.com/settings/security",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "computer vision",
      "AI workflows"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://clarifai.com/settings/security"
    }
  },
  {
    "name": "Bitbucket Cloud API",
    "category": "Coding & Developer Tools",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://bitbucket.org/account/settings/app-passwords/",
    "pricing_url": "https://bitbucket.org/account/settings/app-passwords/",
    "documentation_url": "https://bitbucket.org/account/settings/app-passwords/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "Git repositories"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://bitbucket.org/account/settings/app-passwords/"
    }
  },
  {
    "name": "Sourcegraph API",
    "category": "Coding & Developer Tools",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://sourcegraph.com/.api-keys",
    "pricing_url": "https://sourcegraph.com/.api-keys",
    "documentation_url": "https://sourcegraph.com/.api-keys",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "code search"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://sourcegraph.com/.api-keys"
    }
  },
  {
    "name": "Codeberg API",
    "category": "Coding & Developer Tools",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://codeberg.org/user/settings/applications",
    "pricing_url": "https://codeberg.org/user/settings/applications",
    "documentation_url": "https://codeberg.org/user/settings/applications",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "Git hosting"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://codeberg.org/user/settings/applications"
    }
  },
  {
    "name": "Gitea API",
    "category": "Coding & Developer Tools",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://docs.gitea.com/api/",
    "pricing_url": "https://docs.gitea.com/api/",
    "documentation_url": "https://docs.gitea.com/api/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "Git hosting"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://docs.gitea.com/api/"
    }
  },
  {
    "name": "Forgejo API",
    "category": "Coding & Developer Tools",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://forgejo.org/docs/latest/user/api-usage/",
    "pricing_url": "https://forgejo.org/docs/latest/user/api-usage/",
    "documentation_url": "https://forgejo.org/docs/latest/user/api-usage/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "Git hosting"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://forgejo.org/docs/latest/user/api-usage/"
    }
  },
  {
    "name": "Docker Hub API",
    "category": "DevOps & Containers",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://hub.docker.com/settings/security",
    "pricing_url": "https://hub.docker.com/settings/security",
    "documentation_url": "https://hub.docker.com/settings/security",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "container registry"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://hub.docker.com/settings/security"
    }
  },
  {
    "name": "NPM Registry API",
    "category": "Developer Packages",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.npmjs.com/settings/tokens",
    "pricing_url": "https://www.npmjs.com/settings/tokens",
    "documentation_url": "https://www.npmjs.com/settings/tokens",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "JavaScript packages"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.npmjs.com/settings/tokens"
    }
  },
  {
    "name": "PyPI API",
    "category": "Developer Packages",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://pypi.org/manage/account/token/",
    "pricing_url": "https://pypi.org/manage/account/token/",
    "documentation_url": "https://pypi.org/manage/account/token/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "Python packages"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://pypi.org/manage/account/token/"
    }
  },
  {
    "name": "crates.io API",
    "category": "Developer Packages",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://crates.io/settings/tokens",
    "pricing_url": "https://crates.io/settings/tokens",
    "documentation_url": "https://crates.io/settings/tokens",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "Rust packages"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://crates.io/settings/tokens"
    }
  },
  {
    "name": "Maven Central",
    "category": "Developer Packages",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://central.sonatype.org/",
    "pricing_url": "https://central.sonatype.org/",
    "documentation_url": "https://central.sonatype.org/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "Java packages"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://central.sonatype.org/"
    }
  },
  {
    "name": "SonarCloud API",
    "category": "Code Quality & Security",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://sonarcloud.io/account/security/",
    "pricing_url": "https://sonarcloud.io/account/security/",
    "documentation_url": "https://sonarcloud.io/account/security/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "code analysis"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://sonarcloud.io/account/security/"
    }
  },
  {
    "name": "Snyk API",
    "category": "Code Quality & Security",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://app.snyk.io/account/",
    "pricing_url": "https://app.snyk.io/account/",
    "documentation_url": "https://app.snyk.io/account/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "dependency security"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://app.snyk.io/account/"
    }
  },
  {
    "name": "Dependabot",
    "category": "Code Quality & Security",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://github.com/dependabot",
    "pricing_url": "https://github.com/dependabot",
    "documentation_url": "https://github.com/dependabot",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "dependency updates"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://github.com/dependabot"
    }
  },
  {
    "name": "CircleCI API",
    "category": "CI/CD & DevOps",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://app.circleci.com/settings/user/tokens",
    "pricing_url": "https://app.circleci.com/settings/user/tokens",
    "documentation_url": "https://app.circleci.com/settings/user/tokens",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "CI/CD"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://app.circleci.com/settings/user/tokens"
    }
  },
  {
    "name": "Travis CI API",
    "category": "CI/CD & DevOps",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://app.travis-ci.com/account/preferences",
    "pricing_url": "https://app.travis-ci.com/account/preferences",
    "documentation_url": "https://app.travis-ci.com/account/preferences",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "CI"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://app.travis-ci.com/account/preferences"
    }
  },
  {
    "name": "Drone CI",
    "category": "CI/CD & DevOps",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://docs.drone.io/api/",
    "pricing_url": "https://docs.drone.io/api/",
    "documentation_url": "https://docs.drone.io/api/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "CI/CD"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://docs.drone.io/api/"
    }
  },
  {
    "name": "Semaphore CI",
    "category": "CI/CD & DevOps",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://semaphoreci.com/",
    "pricing_url": "https://semaphoreci.com/",
    "documentation_url": "https://semaphoreci.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "CI/CD"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://semaphoreci.com/"
    }
  },
  {
    "name": "Buildkite API",
    "category": "CI/CD & DevOps",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://buildkite.com/user/api-access-tokens",
    "pricing_url": "https://buildkite.com/user/api-access-tokens",
    "documentation_url": "https://buildkite.com/user/api-access-tokens",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "CI/CD"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://buildkite.com/user/api-access-tokens"
    }
  },
  {
    "name": "Buddy API",
    "category": "CI/CD & DevOps",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://buddy.works/",
    "pricing_url": "https://buddy.works/",
    "documentation_url": "https://buddy.works/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "CI/CD"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://buddy.works/"
    }
  },
  {
    "name": "CircleCI Insights",
    "category": "CI/CD & DevOps",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://circleci.com/",
    "pricing_url": "https://circleci.com/",
    "documentation_url": "https://circleci.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "build analytics"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://circleci.com/"
    }
  },
  {
    "name": "Pulumi Cloud API",
    "category": "DevOps & Infrastructure",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://app.pulumi.com/account/tokens",
    "pricing_url": "https://app.pulumi.com/account/tokens",
    "documentation_url": "https://app.pulumi.com/account/tokens",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "infrastructure as code"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://app.pulumi.com/account/tokens"
    }
  },
  {
    "name": "Terraform Cloud API",
    "category": "DevOps & Infrastructure",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://app.terraform.io/app/settings/tokens",
    "pricing_url": "https://app.terraform.io/app/settings/tokens",
    "documentation_url": "https://app.terraform.io/app/settings/tokens",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "infrastructure as code"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://app.terraform.io/app/settings/tokens"
    }
  },
  {
    "name": "HashiCorp Vault API",
    "category": "Security & Secrets",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://developer.hashicorp.com/vault",
    "pricing_url": "https://developer.hashicorp.com/vault",
    "documentation_url": "https://developer.hashicorp.com/vault",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "secrets management"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://developer.hashicorp.com/vault"
    }
  },
  {
    "name": "Consul API",
    "category": "DevOps & Infrastructure",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://developer.hashicorp.com/consul",
    "pricing_url": "https://developer.hashicorp.com/consul",
    "documentation_url": "https://developer.hashicorp.com/consul",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "service discovery"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://developer.hashicorp.com/consul"
    }
  },
  {
    "name": "Nomad API",
    "category": "DevOps & Infrastructure",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://developer.hashicorp.com/nomad",
    "pricing_url": "https://developer.hashicorp.com/nomad",
    "documentation_url": "https://developer.hashicorp.com/nomad",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "workload orchestration"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://developer.hashicorp.com/nomad"
    }
  },
  {
    "name": "CockroachDB Cloud",
    "category": "Databases & Backend",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://cockroachlabs.cloud/",
    "pricing_url": "https://cockroachlabs.cloud/",
    "documentation_url": "https://cockroachlabs.cloud/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "distributed SQL"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://cockroachlabs.cloud/"
    }
  },
  {
    "name": "Turso",
    "category": "Databases & Backend",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://turso.tech/app",
    "pricing_url": "https://turso.tech/app",
    "documentation_url": "https://turso.tech/app",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "SQLite",
      "edge database"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://turso.tech/app"
    }
  },
  {
    "name": "Convex",
    "category": "Databases & Backend",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://dashboard.convex.dev/",
    "pricing_url": "https://dashboard.convex.dev/",
    "documentation_url": "https://dashboard.convex.dev/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "backend",
      "database"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://dashboard.convex.dev/"
    }
  },
  {
    "name": "Appwrite Cloud",
    "category": "Databases & Backend",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://cloud.appwrite.io/",
    "pricing_url": "https://cloud.appwrite.io/",
    "documentation_url": "https://cloud.appwrite.io/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "backend as a service"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://cloud.appwrite.io/"
    }
  },
  {
    "name": "PocketBase",
    "category": "Databases & Backend",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://pocketbase.io/",
    "pricing_url": "https://pocketbase.io/",
    "documentation_url": "https://pocketbase.io/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "backend"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://pocketbase.io/"
    }
  },
  {
    "name": "Hasura Cloud",
    "category": "Databases & Backend",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://cloud.hasura.io/",
    "pricing_url": "https://cloud.hasura.io/",
    "documentation_url": "https://cloud.hasura.io/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "GraphQL backend"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://cloud.hasura.io/"
    }
  },
  {
    "name": "Nhost",
    "category": "Databases & Backend",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://app.nhost.io/",
    "pricing_url": "https://app.nhost.io/",
    "documentation_url": "https://app.nhost.io/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "GraphQL backend"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://app.nhost.io/"
    }
  },
  {
    "name": "Xata",
    "category": "Databases & Backend",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://app.xata.io/",
    "pricing_url": "https://app.xata.io/",
    "documentation_url": "https://app.xata.io/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "serverless database"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://app.xata.io/"
    }
  },
  {
    "name": "Fauna FQL",
    "category": "Databases & Backend",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://dashboard.fauna.com/",
    "pricing_url": "https://dashboard.fauna.com/",
    "documentation_url": "https://dashboard.fauna.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "serverless database"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://dashboard.fauna.com/"
    }
  },
  {
    "name": "PlanetScale MySQL",
    "category": "Databases & Backend",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://app.planetscale.com/",
    "pricing_url": "https://app.planetscale.com/",
    "documentation_url": "https://app.planetscale.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "MySQL"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://app.planetscale.com/"
    }
  },
  {
    "name": "CockroachDB SQL API",
    "category": "Databases & Backend",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://cockroachlabs.cloud/",
    "pricing_url": "https://cockroachlabs.cloud/",
    "documentation_url": "https://cockroachlabs.cloud/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "distributed SQL API"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://cockroachlabs.cloud/"
    }
  },
  {
    "name": "Upstash Kafka",
    "category": "Messaging & Queues",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://console.upstash.com/",
    "pricing_url": "https://console.upstash.com/",
    "documentation_url": "https://console.upstash.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "Kafka"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://console.upstash.com/"
    }
  },
  {
    "name": "Upstash QStash",
    "category": "Messaging & Queues",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://console.upstash.com/",
    "pricing_url": "https://console.upstash.com/",
    "documentation_url": "https://console.upstash.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "HTTP messaging"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://console.upstash.com/"
    }
  },
  {
    "name": "Aiven",
    "category": "Databases & Infrastructure",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://console.aiven.io/",
    "pricing_url": "https://console.aiven.io/",
    "documentation_url": "https://console.aiven.io/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "managed databases"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://console.aiven.io/"
    }
  },
  {
    "name": "Neon Serverless",
    "category": "Databases & Backend",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://console.neon.tech/",
    "pricing_url": "https://console.neon.tech/",
    "documentation_url": "https://console.neon.tech/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "PostgreSQL"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://console.neon.tech/"
    }
  },
  {
    "name": "TiDB Cloud",
    "category": "Databases & Backend",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://tidbcloud.com/",
    "pricing_url": "https://tidbcloud.com/",
    "documentation_url": "https://tidbcloud.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "MySQL-compatible database"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://tidbcloud.com/"
    }
  },
  {
    "name": "YugabyteDB Managed",
    "category": "Databases & Backend",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://cloud.yugabyte.com/",
    "pricing_url": "https://cloud.yugabyte.com/",
    "documentation_url": "https://cloud.yugabyte.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "distributed SQL"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://cloud.yugabyte.com/"
    }
  },
  {
    "name": "Timescale Cloud",
    "category": "Databases & Backend",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://console.cloud.timescale.com/",
    "pricing_url": "https://console.cloud.timescale.com/",
    "documentation_url": "https://console.cloud.timescale.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "time-series database"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://console.cloud.timescale.com/"
    }
  },
  {
    "name": "InfluxDB Cloud",
    "category": "Databases & Backend",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://cloud2.influxdata.com/",
    "pricing_url": "https://cloud2.influxdata.com/",
    "documentation_url": "https://cloud2.influxdata.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "time-series database"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://cloud2.influxdata.com/"
    }
  },
  {
    "name": "MongoDB Atlas Search",
    "category": "Search & Vector Databases",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://account.mongodb.com/account/login",
    "pricing_url": "https://account.mongodb.com/account/login",
    "documentation_url": "https://account.mongodb.com/account/login",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "document",
      "search database"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://account.mongodb.com/account/login"
    }
  },
  {
    "name": "Elasticsearch Cloud",
    "category": "Search & Vector Databases",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://cloud.elastic.co/",
    "pricing_url": "https://cloud.elastic.co/",
    "documentation_url": "https://cloud.elastic.co/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "search"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://cloud.elastic.co/"
    }
  },
  {
    "name": "Meilisearch Cloud",
    "category": "Search & Vector Databases",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://cloud.meilisearch.com/",
    "pricing_url": "https://cloud.meilisearch.com/",
    "documentation_url": "https://cloud.meilisearch.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "search"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://cloud.meilisearch.com/"
    }
  },
  {
    "name": "Typesense Cloud",
    "category": "Search & Vector Databases",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://cloud.typesense.org/",
    "pricing_url": "https://cloud.typesense.org/",
    "documentation_url": "https://cloud.typesense.org/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "search"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://cloud.typesense.org/"
    }
  },
  {
    "name": "Qdrant Cloud",
    "category": "Vector Databases",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://cloud.qdrant.io/",
    "pricing_url": "https://cloud.qdrant.io/",
    "documentation_url": "https://cloud.qdrant.io/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "vector search"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://cloud.qdrant.io/"
    }
  },
  {
    "name": "Weaviate Cloud",
    "category": "Vector Databases",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://console.weaviate.cloud/",
    "pricing_url": "https://console.weaviate.cloud/",
    "documentation_url": "https://console.weaviate.cloud/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "vector search"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://console.weaviate.cloud/"
    }
  },
  {
    "name": "Brave Search API",
    "category": "Search & Web Intelligence",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://api.search.brave.com/app/keys",
    "pricing_url": "https://api.search.brave.com/app/keys",
    "documentation_url": "https://api.search.brave.com/app/keys",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "web search"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://api.search.brave.com/app/keys"
    }
  },
  {
    "name": "Exa",
    "category": "Search & Web Intelligence",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://dashboard.exa.ai/",
    "pricing_url": "https://dashboard.exa.ai/",
    "documentation_url": "https://dashboard.exa.ai/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "semantic search"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://dashboard.exa.ai/"
    }
  },
  {
    "name": "Firecrawl",
    "category": "Web Scraping & Browser Automation",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.firecrawl.dev/app",
    "pricing_url": "https://www.firecrawl.dev/app",
    "documentation_url": "https://www.firecrawl.dev/app",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "web extraction"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.firecrawl.dev/app"
    }
  },
  {
    "name": "Crawlbase",
    "category": "Web Scraping & Browser Automation",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://crawlbase.com/",
    "pricing_url": "https://crawlbase.com/",
    "documentation_url": "https://crawlbase.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "web scraping"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://crawlbase.com/"
    }
  },
  {
    "name": "ScrapingAnt",
    "category": "Web Scraping & Browser Automation",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://scrapingant.com/",
    "pricing_url": "https://scrapingant.com/",
    "documentation_url": "https://scrapingant.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "web scraping"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://scrapingant.com/"
    }
  },
  {
    "name": "ZenRows",
    "category": "Web Scraping & Browser Automation",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://app.zenrows.com/",
    "pricing_url": "https://app.zenrows.com/",
    "documentation_url": "https://app.zenrows.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "web scraping"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://app.zenrows.com/"
    }
  },
  {
    "name": "Oxylabs",
    "category": "Web Scraping & Browser Automation",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://dashboard.oxylabs.io/",
    "pricing_url": "https://dashboard.oxylabs.io/",
    "documentation_url": "https://dashboard.oxylabs.io/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "proxies",
      "scraping"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://dashboard.oxylabs.io/"
    }
  },
  {
    "name": "Zyte API",
    "category": "Web Scraping & Browser Automation",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://app.zyte.com/",
    "pricing_url": "https://app.zyte.com/",
    "documentation_url": "https://app.zyte.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "web scraping"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://app.zyte.com/"
    }
  },
  {
    "name": "Apify",
    "category": "Web Scraping & Browser Automation",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://console.apify.com/account/integrations",
    "pricing_url": "https://console.apify.com/account/integrations",
    "documentation_url": "https://console.apify.com/account/integrations",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "actors",
      "scraping"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://console.apify.com/account/integrations"
    }
  },
  {
    "name": "Browserless",
    "category": "Web Scraping & Browser Automation",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.browserless.io/",
    "pricing_url": "https://www.browserless.io/",
    "documentation_url": "https://www.browserless.io/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "headless Chrome"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.browserless.io/"
    }
  },
  {
    "name": "BrowserCat",
    "category": "Web Scraping & Browser Automation",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.browsercat.com/",
    "pricing_url": "https://www.browsercat.com/",
    "documentation_url": "https://www.browsercat.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "browser automation"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.browsercat.com/"
    }
  },
  {
    "name": "Steel.dev",
    "category": "Web Scraping & Browser Automation",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://steel.dev/",
    "pricing_url": "https://steel.dev/",
    "documentation_url": "https://steel.dev/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "browser sessions"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://steel.dev/"
    }
  },
  {
    "name": "Scrape.do",
    "category": "Web Scraping & Browser Automation",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://dashboard.scrape.do/",
    "pricing_url": "https://dashboard.scrape.do/",
    "documentation_url": "https://dashboard.scrape.do/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "web scraping"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://dashboard.scrape.do/"
    }
  },
  {
    "name": "Serper.dev",
    "category": "SEO & Search Intelligence",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://serper.dev/api-key",
    "pricing_url": "https://serper.dev/api-key",
    "documentation_url": "https://serper.dev/api-key",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "Google search"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://serper.dev/api-key"
    }
  },
  {
    "name": "DataForSEO",
    "category": "SEO & Search Intelligence",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://app.dataforseo.com/",
    "pricing_url": "https://app.dataforseo.com/",
    "documentation_url": "https://app.dataforseo.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "SERP",
      "SEO"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://app.dataforseo.com/"
    }
  },
  {
    "name": "SEOData.io",
    "category": "SEO & Search Intelligence",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://seodata.io/",
    "pricing_url": "https://seodata.io/",
    "documentation_url": "https://seodata.io/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "SERP data"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://seodata.io/"
    }
  },
  {
    "name": "Scale SERP",
    "category": "SEO & Search Intelligence",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://scaleserp.com/",
    "pricing_url": "https://scaleserp.com/",
    "documentation_url": "https://scaleserp.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "search results"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://scaleserp.com/"
    }
  },
  {
    "name": "Zenserp",
    "category": "SEO & Search Intelligence",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://app.zenserp.com/",
    "pricing_url": "https://app.zenserp.com/",
    "documentation_url": "https://app.zenserp.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "SERP data"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://app.zenserp.com/"
    }
  },
  {
    "name": "SearchApi",
    "category": "SEO & Search Intelligence",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.searchapi.io/",
    "pricing_url": "https://www.searchapi.io/",
    "documentation_url": "https://www.searchapi.io/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "search"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.searchapi.io/"
    }
  },
  {
    "name": "ScrapeStack",
    "category": "Web Scraping & Browser Automation",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://apilayer.com/marketplace/scrapestack-api",
    "pricing_url": "https://apilayer.com/marketplace/scrapestack-api",
    "documentation_url": "https://apilayer.com/marketplace/scrapestack-api",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "web scraping"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://apilayer.com/marketplace/scrapestack-api"
    }
  },
  {
    "name": "ScreenshotOne",
    "category": "Web Scraping & Browser Automation",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://dash.screenshotone.com/",
    "pricing_url": "https://dash.screenshotone.com/",
    "documentation_url": "https://dash.screenshotone.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "web screenshots"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://dash.screenshotone.com/"
    }
  },
  {
    "name": "Urlbox",
    "category": "Web Scraping & Browser Automation",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://urlbox.com/",
    "pricing_url": "https://urlbox.com/",
    "documentation_url": "https://urlbox.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "web screenshots"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://urlbox.com/"
    }
  },
  {
    "name": "Microlink",
    "category": "Web Scraping & Browser Automation",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://microlink.io/",
    "pricing_url": "https://microlink.io/",
    "documentation_url": "https://microlink.io/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "metadata",
      "screenshots"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://microlink.io/"
    }
  },
  {
    "name": "HERE Routing",
    "category": "Geospatial & Routing",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://developer.here.com/",
    "pricing_url": "https://developer.here.com/",
    "documentation_url": "https://developer.here.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "routing"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://developer.here.com/"
    }
  },
  {
    "name": "HERE Geocoding",
    "category": "Geospatial & Routing",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://developer.here.com/",
    "pricing_url": "https://developer.here.com/",
    "documentation_url": "https://developer.here.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "geocoding"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://developer.here.com/"
    }
  },
  {
    "name": "Geoapify Routing",
    "category": "Geospatial & Routing",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://myprojects.geoapify.com/",
    "pricing_url": "https://myprojects.geoapify.com/",
    "documentation_url": "https://myprojects.geoapify.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "routing"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://myprojects.geoapify.com/"
    }
  },
  {
    "name": "Geoapify Places",
    "category": "Geospatial & Routing",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://myprojects.geoapify.com/",
    "pricing_url": "https://myprojects.geoapify.com/",
    "documentation_url": "https://myprojects.geoapify.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "places"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://myprojects.geoapify.com/"
    }
  },
  {
    "name": "Geoapify Geocoding",
    "category": "Geospatial & Routing",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://myprojects.geoapify.com/",
    "pricing_url": "https://myprojects.geoapify.com/",
    "documentation_url": "https://myprojects.geoapify.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "geocoding"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://myprojects.geoapify.com/"
    }
  },
  {
    "name": "Geocode.maps.co",
    "category": "Geospatial & Routing",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://geocode.maps.co/",
    "pricing_url": "https://geocode.maps.co/",
    "documentation_url": "https://geocode.maps.co/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "geocoding"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://geocode.maps.co/"
    }
  },
  {
    "name": "GeoJS",
    "category": "IP Intelligence",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.geojs.io/",
    "pricing_url": "https://www.geojs.io/",
    "documentation_url": "https://www.geojs.io/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "IP geolocation"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.geojs.io/"
    }
  },
  {
    "name": "BigDataCloud",
    "category": "IP Intelligence",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.bigdatacloud.com/",
    "pricing_url": "https://www.bigdatacloud.com/",
    "documentation_url": "https://www.bigdatacloud.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "geolocation"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.bigdatacloud.com/"
    }
  },
  {
    "name": "IP2Location",
    "category": "IP Intelligence",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.ip2location.com/",
    "pricing_url": "https://www.ip2location.com/",
    "documentation_url": "https://www.ip2location.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "IP lookup"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.ip2location.com/"
    }
  },
  {
    "name": "IPinfo Lite",
    "category": "IP Intelligence",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://ipinfo.io/signup",
    "pricing_url": "https://ipinfo.io/signup",
    "documentation_url": "https://ipinfo.io/signup",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "IP intelligence"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://ipinfo.io/signup"
    }
  },
  {
    "name": "Abstract IP Geolocation",
    "category": "IP Intelligence",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://app.abstractapi.com/api/ip-geolocation/",
    "pricing_url": "https://app.abstractapi.com/api/ip-geolocation/",
    "documentation_url": "https://app.abstractapi.com/api/ip-geolocation/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "IP geolocation"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://app.abstractapi.com/api/ip-geolocation/"
    }
  },
  {
    "name": "Radar Maps",
    "category": "Geospatial & Routing",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://radar.com/",
    "pricing_url": "https://radar.com/",
    "documentation_url": "https://radar.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "maps",
      "geofencing"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://radar.com/"
    }
  },
  {
    "name": "MapTiler Geocoding",
    "category": "Geospatial & Routing",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://cloud.maptiler.com/account/keys/",
    "pricing_url": "https://cloud.maptiler.com/account/keys/",
    "documentation_url": "https://cloud.maptiler.com/account/keys/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "geocoding"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://cloud.maptiler.com/account/keys/"
    }
  },
  {
    "name": "OpenRouteService",
    "category": "Geospatial & Routing",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://openrouteservice.org/dev/#/signup",
    "pricing_url": "https://openrouteservice.org/dev/#/signup",
    "documentation_url": "https://openrouteservice.org/dev/#/signup",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "routing"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://openrouteservice.org/dev/#/signup"
    }
  },
  {
    "name": "GraphHopper",
    "category": "Geospatial & Routing",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.graphhopper.com/",
    "pricing_url": "https://www.graphhopper.com/",
    "documentation_url": "https://www.graphhopper.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "routing"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.graphhopper.com/"
    }
  },
  {
    "name": "Valhalla",
    "category": "Geospatial & Routing",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://valhalla.github.io/valhalla/",
    "pricing_url": "https://valhalla.github.io/valhalla/",
    "documentation_url": "https://valhalla.github.io/valhalla/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "routing"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://valhalla.github.io/valhalla/"
    }
  },
  {
    "name": "OSRM",
    "category": "Geospatial & Routing",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://project-osrm.org/",
    "pricing_url": "https://project-osrm.org/",
    "documentation_url": "https://project-osrm.org/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "routing"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://project-osrm.org/"
    }
  },
  {
    "name": "OSM Nominatim",
    "category": "Geospatial & Routing",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://nominatim.org/",
    "pricing_url": "https://nominatim.org/",
    "documentation_url": "https://nominatim.org/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "geocoding"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://nominatim.org/"
    }
  },
  {
    "name": "OSM Overpass",
    "category": "Geospatial & Routing",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://overpass-api.de/",
    "pricing_url": "https://overpass-api.de/",
    "documentation_url": "https://overpass-api.de/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "OpenStreetMap queries"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://overpass-api.de/"
    }
  },
  {
    "name": "Stooq",
    "category": "Stock & Market Data",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://stooq.com/q/d/?s=aapl.us",
    "pricing_url": "https://stooq.com/q/d/?s=aapl.us",
    "documentation_url": "https://stooq.com/q/d/?s=aapl.us",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "market data"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://stooq.com/q/d/?s=aapl.us"
    }
  },
  {
    "name": "EODHD",
    "category": "Stock & Market Data",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://eodhd.com/financial-apis/",
    "pricing_url": "https://eodhd.com/financial-apis/",
    "documentation_url": "https://eodhd.com/financial-apis/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "market data"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://eodhd.com/financial-apis/"
    }
  },
  {
    "name": "AlphaQuery",
    "category": "Stock & Market Data",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.alphaquery.com/",
    "pricing_url": "https://www.alphaquery.com/",
    "documentation_url": "https://www.alphaquery.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "financial data"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.alphaquery.com/"
    }
  },
  {
    "name": "Tiingo",
    "category": "Stock & Market Data",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://api.tiingo.com/",
    "pricing_url": "https://api.tiingo.com/",
    "documentation_url": "https://api.tiingo.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "market data"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://api.tiingo.com/"
    }
  },
  {
    "name": "Polygon/Massive",
    "category": "Stock & Market Data",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://polygon.io/dashboard/api-keys",
    "pricing_url": "https://polygon.io/dashboard/api-keys",
    "documentation_url": "https://polygon.io/dashboard/api-keys",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "market data"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://polygon.io/dashboard/api-keys"
    }
  },
  {
    "name": "Alpaca Market Data",
    "category": "Trading & Brokerage",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://app.alpaca.markets/paper/dashboard/overview",
    "pricing_url": "https://app.alpaca.markets/paper/dashboard/overview",
    "documentation_url": "https://app.alpaca.markets/paper/dashboard/overview",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "trading",
      "market data"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://app.alpaca.markets/paper/dashboard/overview"
    }
  },
  {
    "name": "Interactive Brokers API",
    "category": "Trading & Brokerage",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.interactivebrokers.com/",
    "pricing_url": "https://www.interactivebrokers.com/",
    "documentation_url": "https://www.interactivebrokers.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "trading"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.interactivebrokers.com/"
    }
  },
  {
    "name": "OANDA v20",
    "category": "Trading & Brokerage",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://developer.oanda.com/",
    "pricing_url": "https://developer.oanda.com/",
    "documentation_url": "https://developer.oanda.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "FX"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://developer.oanda.com/"
    }
  },
  {
    "name": "Twelve Data Forex",
    "category": "Foreign Exchange",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://twelvedata.com/apikey",
    "pricing_url": "https://twelvedata.com/apikey",
    "documentation_url": "https://twelvedata.com/apikey",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "foreign exchange"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://twelvedata.com/apikey"
    }
  },
  {
    "name": "Frankfurter",
    "category": "Foreign Exchange",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.frankfurter.app/",
    "pricing_url": "https://www.frankfurter.app/",
    "documentation_url": "https://www.frankfurter.app/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "foreign exchange"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.frankfurter.app/"
    }
  },
  {
    "name": "CurrencyBeacon",
    "category": "Foreign Exchange",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://currencybeacon.com/",
    "pricing_url": "https://currencybeacon.com/",
    "documentation_url": "https://currencybeacon.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "foreign exchange"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://currencybeacon.com/"
    }
  },
  {
    "name": "CurrencyFreaks",
    "category": "Foreign Exchange",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://currencyfreaks.com/",
    "pricing_url": "https://currencyfreaks.com/",
    "documentation_url": "https://currencyfreaks.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "foreign exchange"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://currencyfreaks.com/"
    }
  },
  {
    "name": "Currencyapi.com",
    "category": "Foreign Exchange",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://app.currencyapi.com/",
    "pricing_url": "https://app.currencyapi.com/",
    "documentation_url": "https://app.currencyapi.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "foreign exchange"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://app.currencyapi.com/"
    }
  },
  {
    "name": "FloatRates",
    "category": "Foreign Exchange",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.floatrates.com/",
    "pricing_url": "https://www.floatrates.com/",
    "documentation_url": "https://www.floatrates.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "foreign exchange"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.floatrates.com/"
    }
  },
  {
    "name": "OECD SDMX API",
    "category": "Economic & Statistical Data",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://data-explorer.oecd.org/",
    "pricing_url": "https://data-explorer.oecd.org/",
    "documentation_url": "https://data-explorer.oecd.org/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "economic data"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://data-explorer.oecd.org/"
    }
  },
  {
    "name": "IMF Data API",
    "category": "Economic & Statistical Data",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.imf.org/en/Data",
    "pricing_url": "https://www.imf.org/en/Data",
    "documentation_url": "https://www.imf.org/en/Data",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "economic data"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.imf.org/en/Data"
    }
  },
  {
    "name": "ECB Data API",
    "category": "Economic & Statistical Data",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://data-api.ecb.europa.eu/",
    "pricing_url": "https://data-api.ecb.europa.eu/",
    "documentation_url": "https://data-api.ecb.europa.eu/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "financial",
      "economic data"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://data-api.ecb.europa.eu/"
    }
  },
  {
    "name": "BIS Statistics API",
    "category": "Economic & Statistical Data",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.bis.org/statistics/api.htm",
    "pricing_url": "https://www.bis.org/statistics/api.htm",
    "documentation_url": "https://www.bis.org/statistics/api.htm",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "banking statistics"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.bis.org/statistics/api.htm"
    }
  },
  {
    "name": "UN Data API",
    "category": "Economic & Statistical Data",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://data.un.org/",
    "pricing_url": "https://data.un.org/",
    "documentation_url": "https://data.un.org/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "global statistics"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://data.un.org/"
    }
  },
  {
    "name": "OECD SDMX-JSON",
    "category": "Economic & Statistical Data",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://data.oecd.org/",
    "pricing_url": "https://data.oecd.org/",
    "documentation_url": "https://data.oecd.org/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "statistics"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://data.oecd.org/"
    }
  },
  {
    "name": "Europe PMC",
    "category": "Scientific Research",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.ebi.ac.uk/europepmc/webservices/",
    "pricing_url": "https://www.ebi.ac.uk/europepmc/webservices/",
    "documentation_url": "https://www.ebi.ac.uk/europepmc/webservices/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "biomedical papers"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.ebi.ac.uk/europepmc/webservices/"
    }
  },
  {
    "name": "NCBI E-utilities",
    "category": "Scientific Research",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.ncbi.nlm.nih.gov/home/develop/api/",
    "pricing_url": "https://www.ncbi.nlm.nih.gov/home/develop/api/",
    "documentation_url": "https://www.ncbi.nlm.nih.gov/home/develop/api/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "PubMed",
      "NCBI data"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.ncbi.nlm.nih.gov/home/develop/api/"
    }
  },
  {
    "name": "Semantic Scholar Graph",
    "category": "Scientific Research",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.semanticscholar.org/product/api",
    "pricing_url": "https://www.semanticscholar.org/product/api",
    "documentation_url": "https://www.semanticscholar.org/product/api",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "scholarly papers"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.semanticscholar.org/product/api"
    }
  },
  {
    "name": "Crossref REST API",
    "category": "Scientific Research",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://api.crossref.org/",
    "pricing_url": "https://api.crossref.org/",
    "documentation_url": "https://api.crossref.org/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "DOI metadata"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://api.crossref.org/"
    }
  },
  {
    "name": "DataCite API",
    "category": "Scientific Research",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://api.datacite.org/",
    "pricing_url": "https://api.datacite.org/",
    "documentation_url": "https://api.datacite.org/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "research metadata"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://api.datacite.org/"
    }
  },
  {
    "name": "ORCID API",
    "category": "Scientific Research",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://orcid.org/developer-tools",
    "pricing_url": "https://orcid.org/developer-tools",
    "documentation_url": "https://orcid.org/developer-tools",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "researcher identity"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://orcid.org/developer-tools"
    }
  },
  {
    "name": "CORE API",
    "category": "Scientific Research",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://core.ac.uk/services/api",
    "pricing_url": "https://core.ac.uk/services/api",
    "documentation_url": "https://core.ac.uk/services/api",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "open papers"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://core.ac.uk/services/api"
    }
  },
  {
    "name": "Unpaywall API",
    "category": "Scientific Research",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://unpaywall.org/products/api",
    "pricing_url": "https://unpaywall.org/products/api",
    "documentation_url": "https://unpaywall.org/products/api",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "open access discovery"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://unpaywall.org/products/api"
    }
  },
  {
    "name": "OpenCitations",
    "category": "Scientific Research",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://opencitations.net/",
    "pricing_url": "https://opencitations.net/",
    "documentation_url": "https://opencitations.net/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "citation data"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://opencitations.net/"
    }
  },
  {
    "name": "Lens API",
    "category": "Scientific Research",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.lens.org/lens/user/subscriptions",
    "pricing_url": "https://www.lens.org/lens/user/subscriptions",
    "documentation_url": "https://www.lens.org/lens/user/subscriptions",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "patents",
      "papers"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.lens.org/lens/user/subscriptions"
    }
  },
  {
    "name": "NASA APIs",
    "category": "Science & Space",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://api.nasa.gov/",
    "pricing_url": "https://api.nasa.gov/",
    "documentation_url": "https://api.nasa.gov/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "space data"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://api.nasa.gov/"
    }
  },
  {
    "name": "ESA Open Data",
    "category": "Science & Space",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.esa.int/",
    "pricing_url": "https://www.esa.int/",
    "documentation_url": "https://www.esa.int/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "space data"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.esa.int/"
    }
  },
  {
    "name": "USGS APIs",
    "category": "Science & Earth Data",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.usgs.gov/products/data-and-tools",
    "pricing_url": "https://www.usgs.gov/products/data-and-tools",
    "documentation_url": "https://www.usgs.gov/products/data-and-tools",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "earth science"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.usgs.gov/products/data-and-tools"
    }
  },
  {
    "name": "NOAA APIs",
    "category": "Science & Climate Data",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.ncei.noaa.gov/support/access-data-service-api-user-documentation",
    "pricing_url": "https://www.ncei.noaa.gov/support/access-data-service-api-user-documentation",
    "documentation_url": "https://www.ncei.noaa.gov/support/access-data-service-api-user-documentation",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "climate data"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.ncei.noaa.gov/support/access-data-service-api-user-documentation"
    }
  },
  {
    "name": "GBIF API",
    "category": "Biodiversity & Life Science",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.gbif.org/developer/summary",
    "pricing_url": "https://www.gbif.org/developer/summary",
    "documentation_url": "https://www.gbif.org/developer/summary",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "biodiversity"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.gbif.org/developer/summary"
    }
  },
  {
    "name": "iNaturalist API",
    "category": "Biodiversity & Life Science",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.inaturalist.org/pages/api+reference",
    "pricing_url": "https://www.inaturalist.org/pages/api+reference",
    "documentation_url": "https://www.inaturalist.org/pages/api+reference",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "species data"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.inaturalist.org/pages/api+reference"
    }
  },
  {
    "name": "EMBL-EBI APIs",
    "category": "Bioinformatics",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.ebi.ac.uk/services",
    "pricing_url": "https://www.ebi.ac.uk/services",
    "documentation_url": "https://www.ebi.ac.uk/services",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "biology data"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.ebi.ac.uk/services"
    }
  },
  {
    "name": "UniProt REST API",
    "category": "Bioinformatics",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.uniprot.org/help/api",
    "pricing_url": "https://www.uniprot.org/help/api",
    "documentation_url": "https://www.uniprot.org/help/api",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "protein data"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.uniprot.org/help/api"
    }
  },
  {
    "name": "PDB REST API",
    "category": "Bioinformatics",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.rcsb.org/docs/programmatic-access",
    "pricing_url": "https://www.rcsb.org/docs/programmatic-access",
    "documentation_url": "https://www.rcsb.org/docs/programmatic-access",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "protein structures"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.rcsb.org/docs/programmatic-access"
    }
  },
  {
    "name": "KEGG API",
    "category": "Bioinformatics",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.kegg.jp/kegg/rest/",
    "pricing_url": "https://www.kegg.jp/kegg/rest/",
    "documentation_url": "https://www.kegg.jp/kegg/rest/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "genomics"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.kegg.jp/kegg/rest/"
    }
  },
  {
    "name": "Ensembl REST",
    "category": "Bioinformatics",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://rest.ensembl.org/",
    "pricing_url": "https://rest.ensembl.org/",
    "documentation_url": "https://rest.ensembl.org/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "genomics"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://rest.ensembl.org/"
    }
  },
  {
    "name": "Europe PMC Annotations",
    "category": "Bioinformatics",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.ebi.ac.uk/europepmc/",
    "pricing_url": "https://www.ebi.ac.uk/europepmc/",
    "documentation_url": "https://www.ebi.ac.uk/europepmc/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "biomedical annotations"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.ebi.ac.uk/europepmc/"
    }
  },
  {
    "name": "Open Targets",
    "category": "Bioinformatics",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://platform.opentargets.org/",
    "pricing_url": "https://platform.opentargets.org/",
    "documentation_url": "https://platform.opentargets.org/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "drug discovery"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://platform.opentargets.org/"
    }
  },
  {
    "name": "data.gov.au",
    "category": "Government & Civic Data",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.data.gov.au/",
    "pricing_url": "https://www.data.gov.au/",
    "documentation_url": "https://www.data.gov.au/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "Australian datasets"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.data.gov.au/"
    }
  },
  {
    "name": "data.gov.in",
    "category": "Government & Civic Data",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.data.gov.in/",
    "pricing_url": "https://www.data.gov.in/",
    "documentation_url": "https://www.data.gov.in/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "Indian datasets"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.data.gov.in/"
    }
  },
  {
    "name": "data.gov.uk",
    "category": "Government & Civic Data",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.data.gov.uk/",
    "pricing_url": "https://www.data.gov.uk/",
    "documentation_url": "https://www.data.gov.uk/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "UK datasets"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.data.gov.uk/"
    }
  },
  {
    "name": "Data.gov.sg",
    "category": "Government & Civic Data",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://data.gov.sg/",
    "pricing_url": "https://data.gov.sg/",
    "documentation_url": "https://data.gov.sg/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "Singapore datasets"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://data.gov.sg/"
    }
  },
  {
    "name": "Canada Open Government",
    "category": "Government & Civic Data",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://open.canada.ca/",
    "pricing_url": "https://open.canada.ca/",
    "documentation_url": "https://open.canada.ca/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "Canadian datasets"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://open.canada.ca/"
    }
  },
  {
    "name": "NYC Open Data",
    "category": "Government & Civic Data",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://data.cityofnewyork.us/",
    "pricing_url": "https://data.cityofnewyork.us/",
    "documentation_url": "https://data.cityofnewyork.us/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "NYC datasets"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://data.cityofnewyork.us/"
    }
  },
  {
    "name": "Chicago Data Portal",
    "category": "Government & Civic Data",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://data.cityofchicago.org/",
    "pricing_url": "https://data.cityofchicago.org/",
    "documentation_url": "https://data.cityofchicago.org/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "Chicago datasets"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://data.cityofchicago.org/"
    }
  },
  {
    "name": "London Datastore",
    "category": "Government & Civic Data",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://data.london.gov.uk/",
    "pricing_url": "https://data.london.gov.uk/",
    "documentation_url": "https://data.london.gov.uk/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "London datasets"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://data.london.gov.uk/"
    }
  },
  {
    "name": "UK Parliament API",
    "category": "Government & Civic Data",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://developer.parliament.uk/",
    "pricing_url": "https://developer.parliament.uk/",
    "documentation_url": "https://developer.parliament.uk/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "parliamentary data"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://developer.parliament.uk/"
    }
  },
  {
    "name": "Congress.gov API",
    "category": "Government & Civic Data",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://api.congress.gov/",
    "pricing_url": "https://api.congress.gov/",
    "documentation_url": "https://api.congress.gov/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "US legislation"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://api.congress.gov/"
    }
  },
  {
    "name": "SEC EDGAR API",
    "category": "Government & Civic Data",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.sec.gov/edgar/sec-api-documentation",
    "pricing_url": "https://www.sec.gov/edgar/sec-api-documentation",
    "documentation_url": "https://www.sec.gov/edgar/sec-api-documentation",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "SEC filings"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.sec.gov/edgar/sec-api-documentation"
    }
  },
  {
    "name": "Federal Register API",
    "category": "Government & Civic Data",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.federalregister.gov/developers/documentation/api/v1",
    "pricing_url": "https://www.federalregister.gov/developers/documentation/api/v1",
    "documentation_url": "https://www.federalregister.gov/developers/documentation/api/v1",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "US regulations"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.federalregister.gov/developers/documentation/api/v1"
    }
  },
  {
    "name": "GovInfo API",
    "category": "Government & Civic Data",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.govinfo.gov/developers",
    "pricing_url": "https://www.govinfo.gov/developers",
    "documentation_url": "https://www.govinfo.gov/developers",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "government documents"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.govinfo.gov/developers"
    }
  },
  {
    "name": "Census API",
    "category": "Government & Civic Data",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://api.census.gov/data/key_signup.html",
    "pricing_url": "https://api.census.gov/data/key_signup.html",
    "documentation_url": "https://api.census.gov/data/key_signup.html",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "demographics"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://api.census.gov/data/key_signup.html"
    }
  },
  {
    "name": "BLS API",
    "category": "Government & Civic Data",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://data.bls.gov/registrationEngine/",
    "pricing_url": "https://data.bls.gov/registrationEngine/",
    "documentation_url": "https://data.bls.gov/registrationEngine/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "labor statistics"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://data.bls.gov/registrationEngine/"
    }
  },
  {
    "name": "BEA API",
    "category": "Government & Civic Data",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://apps.bea.gov/API/signup/",
    "pricing_url": "https://apps.bea.gov/API/signup/",
    "documentation_url": "https://apps.bea.gov/API/signup/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "economic data"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://apps.bea.gov/API/signup/"
    }
  },
  {
    "name": "EIA API",
    "category": "Energy & Climate Data",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.eia.gov/opendata/register.php",
    "pricing_url": "https://www.eia.gov/opendata/register.php",
    "documentation_url": "https://www.eia.gov/opendata/register.php",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "energy data"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.eia.gov/opendata/register.php"
    }
  },
  {
    "name": "Treasury Fiscal Data",
    "category": "Government & Civic Data",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://fiscaldata.treasury.gov/api/fiscal_service/",
    "pricing_url": "https://fiscaldata.treasury.gov/api/fiscal_service/",
    "documentation_url": "https://fiscaldata.treasury.gov/api/fiscal_service/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "US fiscal data"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://fiscaldata.treasury.gov/api/fiscal_service/"
    }
  },
  {
    "name": "World Bank Indicators",
    "category": "Economic & Statistical Data",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://datahelpdesk.worldbank.org/knowledgebase/articles/889392-about-the-indicators-api-documentation",
    "pricing_url": "https://datahelpdesk.worldbank.org/knowledgebase/articles/889392-about-the-indicators-api-documentation",
    "documentation_url": "https://datahelpdesk.worldbank.org/knowledgebase/articles/889392-about-the-indicators-api-documentation",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "development data"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://datahelpdesk.worldbank.org/knowledgebase/articles/889392-about-the-indicators-api-documentation"
    }
  },
  {
    "name": "Pixabay",
    "category": "Images & Stock Media",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://pixabay.com/api/docs/",
    "pricing_url": "https://pixabay.com/api/docs/",
    "documentation_url": "https://pixabay.com/api/docs/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "images"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://pixabay.com/api/docs/"
    }
  },
  {
    "name": "Pexels",
    "category": "Images & Stock Media",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.pexels.com/api/",
    "pricing_url": "https://www.pexels.com/api/",
    "documentation_url": "https://www.pexels.com/api/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "photos",
      "videos"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.pexels.com/api/"
    }
  },
  {
    "name": "Unsplash",
    "category": "Images & Stock Media",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://unsplash.com/developers",
    "pricing_url": "https://unsplash.com/developers",
    "documentation_url": "https://unsplash.com/developers",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "photos"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://unsplash.com/developers"
    }
  },
  {
    "name": "Giphy",
    "category": "Images & Stock Media",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://developers.giphy.com/dashboard/",
    "pricing_url": "https://developers.giphy.com/dashboard/",
    "documentation_url": "https://developers.giphy.com/dashboard/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "GIFs"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://developers.giphy.com/dashboard/"
    }
  },
  {
    "name": "Tenor",
    "category": "Images & Stock Media",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://developers.google.com/tenor",
    "pricing_url": "https://developers.google.com/tenor",
    "documentation_url": "https://developers.google.com/tenor",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "GIFs"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://developers.google.com/tenor"
    }
  },
  {
    "name": "Flickr",
    "category": "Images & Stock Media",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.flickr.com/services/api/",
    "pricing_url": "https://www.flickr.com/services/api/",
    "documentation_url": "https://www.flickr.com/services/api/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "photos"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.flickr.com/services/api/"
    }
  },
  {
    "name": "Wikimedia Commons",
    "category": "Images & Stock Media",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://commons.wikimedia.org/w/api.php",
    "pricing_url": "https://commons.wikimedia.org/w/api.php",
    "documentation_url": "https://commons.wikimedia.org/w/api.php",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "media"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://commons.wikimedia.org/w/api.php"
    }
  },
  {
    "name": "Wikimedia APIs",
    "category": "Images & Stock Media",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://api.wikimedia.org/",
    "pricing_url": "https://api.wikimedia.org/",
    "documentation_url": "https://api.wikimedia.org/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "Wikimedia"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://api.wikimedia.org/"
    }
  },
  {
    "name": "Coverr",
    "category": "Video & Streaming",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://coverr.co/",
    "pricing_url": "https://coverr.co/",
    "documentation_url": "https://coverr.co/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "stock video"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://coverr.co/"
    }
  },
  {
    "name": "Pixabay Video",
    "category": "Video & Streaming",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://pixabay.com/api/docs/",
    "pricing_url": "https://pixabay.com/api/docs/",
    "documentation_url": "https://pixabay.com/api/docs/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "stock video"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://pixabay.com/api/docs/"
    }
  },
  {
    "name": "Freesound",
    "category": "Audio & Sound",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://freesound.org/apiv2/apply/",
    "pricing_url": "https://freesound.org/apiv2/apply/",
    "documentation_url": "https://freesound.org/apiv2/apply/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "audio"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://freesound.org/apiv2/apply/"
    }
  },
  {
    "name": "Internet Archive",
    "category": "Media & Archives",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://archive.org/developers/",
    "pricing_url": "https://archive.org/developers/",
    "documentation_url": "https://archive.org/developers/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "archive media"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://archive.org/developers/"
    }
  },
  {
    "name": "Listen Notes",
    "category": "Podcasts & Radio",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.listennotes.com/api/",
    "pricing_url": "https://www.listennotes.com/api/",
    "documentation_url": "https://www.listennotes.com/api/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "podcasts"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.listennotes.com/api/"
    }
  },
  {
    "name": "Podcast Index",
    "category": "Podcasts & Radio",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://podcastindex-org.github.io/docs-api/",
    "pricing_url": "https://podcastindex-org.github.io/docs-api/",
    "documentation_url": "https://podcastindex-org.github.io/docs-api/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "podcasts"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://podcastindex-org.github.io/docs-api/"
    }
  },
  {
    "name": "Radio Browser",
    "category": "Podcasts & Radio",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.radio-browser.info/",
    "pricing_url": "https://www.radio-browser.info/",
    "documentation_url": "https://www.radio-browser.info/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "internet radio"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.radio-browser.info/"
    }
  },
  {
    "name": "Jamendo",
    "category": "Music Metadata",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://developer.jamendo.com/",
    "pricing_url": "https://developer.jamendo.com/",
    "documentation_url": "https://developer.jamendo.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "music"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://developer.jamendo.com/"
    }
  },
  {
    "name": "MusicBrainz",
    "category": "Music Metadata",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://musicbrainz.org/doc/MusicBrainz_API",
    "pricing_url": "https://musicbrainz.org/doc/MusicBrainz_API",
    "documentation_url": "https://musicbrainz.org/doc/MusicBrainz_API",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "music metadata"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://musicbrainz.org/doc/MusicBrainz_API"
    }
  },
  {
    "name": "Last.fm Extended",
    "category": "Music Metadata",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.last.fm/api/account/create",
    "pricing_url": "https://www.last.fm/api/account/create",
    "documentation_url": "https://www.last.fm/api/account/create",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "music metadata"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.last.fm/api/account/create"
    }
  },
  {
    "name": "Discogs",
    "category": "Music Metadata",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.discogs.com/settings/developers",
    "pricing_url": "https://www.discogs.com/settings/developers",
    "documentation_url": "https://www.discogs.com/settings/developers",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "music metadata"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.discogs.com/settings/developers"
    }
  },
  {
    "name": "TheAudioDB Extended",
    "category": "Music Metadata",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.theaudiodb.com/api_guide.php",
    "pricing_url": "https://www.theaudiodb.com/api_guide.php",
    "documentation_url": "https://www.theaudiodb.com/api_guide.php",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "artist",
      "album data"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.theaudiodb.com/api_guide.php"
    }
  },
  {
    "name": "ESPN API",
    "category": "Sports Data",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.espn.com/",
    "pricing_url": "https://www.espn.com/",
    "documentation_url": "https://www.espn.com/",
    "free_tier": {
      "has_free_tier": null,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "sports data"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.espn.com/"
    }
  },
  {
    "name": "Sportradar Developer",
    "category": "Sports Data",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://developer.sportradar.com/",
    "pricing_url": "https://developer.sportradar.com/",
    "documentation_url": "https://developer.sportradar.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "sports"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://developer.sportradar.com/"
    }
  },
  {
    "name": "SportsDB",
    "category": "Sports Data",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.thesportsdb.com/api.php",
    "pricing_url": "https://www.thesportsdb.com/api.php",
    "documentation_url": "https://www.thesportsdb.com/api.php",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "sports data"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.thesportsdb.com/api.php"
    }
  },
  {
    "name": "balldontlie NFL",
    "category": "Sports Data",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.balldontlie.io/",
    "pricing_url": "https://www.balldontlie.io/",
    "documentation_url": "https://www.balldontlie.io/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "NFL"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.balldontlie.io/"
    }
  },
  {
    "name": "OpenLigaDB",
    "category": "Sports Data",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.openligadb.de/",
    "pricing_url": "https://www.openligadb.de/",
    "documentation_url": "https://www.openligadb.de/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "football data"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.openligadb.de/"
    }
  },
  {
    "name": "Jolpica F1",
    "category": "Motorsport",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://api.jolpi.ca/ergast/f1/",
    "pricing_url": "https://api.jolpi.ca/ergast/f1/",
    "documentation_url": "https://api.jolpi.ca/ergast/f1/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "Formula 1"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://api.jolpi.ca/ergast/f1/"
    }
  },
  {
    "name": "Chess.com API",
    "category": "Chess & Board Games",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.chess.com/news/view/published-data-api",
    "pricing_url": "https://www.chess.com/news/view/published-data-api",
    "documentation_url": "https://www.chess.com/news/view/published-data-api",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "chess data"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.chess.com/news/view/published-data-api"
    }
  },
  {
    "name": "Lichess API",
    "category": "Chess & Board Games",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://lichess.org/api",
    "pricing_url": "https://lichess.org/api",
    "documentation_url": "https://lichess.org/api",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "chess data"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://lichess.org/api"
    }
  },
  {
    "name": "Blizzard API",
    "category": "Gaming",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://develop.battle.net/",
    "pricing_url": "https://develop.battle.net/",
    "documentation_url": "https://develop.battle.net/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "game data"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://develop.battle.net/"
    }
  },
  {
    "name": "IGDB API",
    "category": "Gaming",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://api-docs.igdb.com/",
    "pricing_url": "https://api-docs.igdb.com/",
    "documentation_url": "https://api-docs.igdb.com/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "game database"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://api-docs.igdb.com/"
    }
  },
  {
    "name": "RAWG API",
    "category": "Gaming",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://rawg.io/apidocs",
    "pricing_url": "https://rawg.io/apidocs",
    "documentation_url": "https://rawg.io/apidocs",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "game database"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://rawg.io/apidocs"
    }
  },
  {
    "name": "Board Game Atlas",
    "category": "Chess & Board Games",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://www.boardgameatlas.com/api/docs",
    "pricing_url": "https://www.boardgameatlas.com/api/docs",
    "documentation_url": "https://www.boardgameatlas.com/api/docs",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "board games"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://www.boardgameatlas.com/api/docs"
    }
  },
  {
    "name": "Open Trivia DB",
    "category": "Gaming & Entertainment",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://opentdb.com/api_config.php",
    "pricing_url": "https://opentdb.com/api_config.php",
    "documentation_url": "https://opentdb.com/api_config.php",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "trivia"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://opentdb.com/api_config.php"
    }
  },
  {
    "name": "Jikan",
    "category": "Anime & Manga",
    "description": "Candidate API provider added in the September 2026 expansion. Current free-tier details require provider-side verification.",
    "signup_url": "https://jikan.moe/",
    "pricing_url": "https://jikan.moe/",
    "documentation_url": "https://jikan.moe/",
    "free_tier": {
      "has_free_tier": true,
      "type": "unknown",
      "details": "Candidate expansion entry; free/trial label has not yet been independently verified against the provider's current official pricing/docs.",
      "amount": "Unverified",
      "expiry": "Unverified"
    },
    "requires_credit_card": "Unverified",
    "uses": [
      "anime",
      "manga"
    ],
    "last_verified": null,
    "verified_by": "expansion-shortlist-unverified",
    "status": "candidate",
    "verification_status": "candidate-unverified",
    "authentication": "Unverified",
    "protocols": [],
    "sdk_languages": [],
    "commercial_use": "Unverified",
    "self_hostable": "Unverified",
    "webhooks": "Unverified",
    "rate_limit": "Unverified",
    "free_tier_reset": "Unverified",
    "verification_sources": {
      "provider": "https://jikan.moe/"
    }
  }
];
