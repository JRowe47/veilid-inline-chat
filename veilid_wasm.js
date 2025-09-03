




<!DOCTYPE html>
<html class="gl-system ui-neutral with-top-bar with-header " lang="en">
<head prefix="og: http://ogp.me/ns#">
<meta charset="utf-8">
<meta content="IE=edge" http-equiv="X-UA-Compatible">
<meta content="width=device-width, initial-scale=1" name="viewport">
<title>src/wasm/veilid_wasm.js · main · Brandon Vandegrift / veilid-example-vanilla-js · GitLab</title>
<script nonce="6aHXeH5aDWbDo4FVUp5QhQ==">
//<![CDATA[
window.gon={};gon.math_rendering_limits_enabled=true;gon.features={"inlineBlame":false,"directoryCodeDropdownUpdates":true,"repositoryFileTreeBrowser":false,"repositoryLockInformation":false};gon.licensed_features={"remoteDevelopment":true};
//]]>
</script>

<script nonce="6aHXeH5aDWbDo4FVUp5QhQ==">
//<![CDATA[
const root = document.documentElement;
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  root.classList.add('gl-dark');
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (e.matches) {
    root.classList.add('gl-dark');
  } else {
    root.classList.remove('gl-dark');
  }
});

//]]>
</script>
<script nonce="6aHXeH5aDWbDo4FVUp5QhQ==">
//<![CDATA[
var gl = window.gl || {};
gl.startup_calls = null;
gl.startup_graphql_calls = [{"query":"query getBlobInfo(\n  $projectPath: ID!\n  $filePath: [String!]!\n  $ref: String!\n  $refType: RefType\n  $shouldFetchRawText: Boolean!\n) {\n  project(fullPath: $projectPath) {\n    __typename\n    id\n    repository {\n      __typename\n      empty\n      blobs(paths: $filePath, ref: $ref, refType: $refType) {\n        __typename\n        nodes {\n          __typename\n          id\n          webPath\n          name\n          size\n          rawSize\n          rawTextBlob @include(if: $shouldFetchRawText)\n          fileType\n          language\n          path\n          blamePath\n          editBlobPath\n          gitpodBlobUrl\n          ideEditPath\n          forkAndEditPath\n          ideForkAndEditPath\n          codeNavigationPath\n          projectBlobPathRoot\n          forkAndViewPath\n          environmentFormattedExternalUrl\n          environmentExternalUrlForRouteMap\n          canModifyBlob\n          canModifyBlobWithWebIde\n          canCurrentUserPushToBranch\n          archived\n          storedExternally\n          externalStorage\n          externalStorageUrl\n          rawPath\n          replacePath\n          pipelineEditorPath\n          simpleViewer {\n            fileType\n            tooLarge\n            type\n            renderError\n          }\n          richViewer {\n            fileType\n            tooLarge\n            type\n            renderError\n          }\n        }\n      }\n    }\n  }\n}\n","variables":{"projectPath":"bmv437/veilid-example-vanilla-js","ref":"main","refType":"HEADS","filePath":"src/wasm/veilid_wasm.js","shouldFetchRawText":true}}];

if (gl.startup_calls && window.fetch) {
  Object.keys(gl.startup_calls).forEach(apiCall => {
   gl.startup_calls[apiCall] = {
      fetchCall: fetch(apiCall, {
        // Emulate XHR for Rails AJAX request checks
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        },
        // fetch won’t send cookies in older browsers, unless you set the credentials init option.
        // We set to `same-origin` which is default value in modern browsers.
        // See https://github.com/whatwg/fetch/pull/585 for more information.
        credentials: 'same-origin'
      })
    };
  });
}
if (gl.startup_graphql_calls && window.fetch) {
  const headers = {"X-CSRF-Token":"_7TDfZK2Nw8u7kUku28Zn_1cwEowZ0lmE_vi0ruDxpGpkTQYCqOHxpWTnxAeyFtL76jM0D03GtTnHkgiMRl5oA","x-gitlab-feature-category":"source_code_management"};
  const url = `https://gitlab.com/api/graphql`

  const opts = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    }
  };

  gl.startup_graphql_calls = gl.startup_graphql_calls.map(call => ({
    ...call,
    fetchCall: fetch(url, {
      ...opts,
      credentials: 'same-origin',
      body: JSON.stringify(call)
    })
  }))
}


//]]>
</script>

<link rel="prefetch" href="/assets/webpack/monaco.2f50fc5f.chunk.js">

<meta content="light dark" name="color-scheme">
<link rel="stylesheet" href="/assets/application-ee330fe9c931236d2bd0772cf1ae10ec0c47781717a7581b22789e62e1ad85b6.css" media="(prefers-color-scheme: light)" />
<link rel="stylesheet" href="/assets/application_dark-d4bdadcc22fe8db659cff768521d61a828449282241229eb1ade86325e0dadff.css" media="(prefers-color-scheme: dark)" />
<link rel="stylesheet" href="/assets/page_bundles/tree-0997ae640d0be275151800b9a2fe1b8bc359b489423b74094ddab00f0042237d.css" /><link rel="stylesheet" href="/assets/page_bundles/projects-9af221476a8864ce1a6f12121689b12350aae0803d7d688e242bed15d497fe63.css" /><link rel="stylesheet" href="/assets/page_bundles/commit_description-9e7efe20f0cef17d0606edabfad0418e9eb224aaeaa2dae32c817060fa60abcc.css" /><link rel="stylesheet" href="/assets/page_bundles/work_items-a56871e946de38006e940afb19f5c43c535a9daf96672db7fa80ef646b878d17.css" /><link rel="stylesheet" href="/assets/page_bundles/notes_shared-fdb928d321a0d92553fbc5f15d2c1bb1b92d6d6461a8e450b89db35e6dc8d1d9.css" />
<link rel="stylesheet" href="/assets/application_utilities-e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855.css" media="(prefers-color-scheme: light)" />
<link rel="stylesheet" href="/assets/application_utilities_dark-e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855.css" media="(prefers-color-scheme: dark)" />
<link rel="stylesheet" href="/assets/tailwind-a3a1a8a48d3cc664132dc0df3950878583041083bd0a292e8b3888b36d457c3d.css" />


<link rel="stylesheet" href="/assets/fonts-deb7ad1d55ca77c0172d8538d53442af63604ff490c74acc2859db295c125bdb.css" />
<link rel="stylesheet" href="/assets/highlight/themes/white-f9894e9bc9414456158c25fb1a2f853ace8855b6a40b2b43001d20fb651b5512.css" media="(prefers-color-scheme: light)" />
<link rel="stylesheet" href="/assets/highlight/themes/dark-67ac54fe266c37b22ddc8f582d52a80540d5747ea91a851778a772440fab2aac.css" media="(prefers-color-scheme: dark)" />

<script src="/assets/webpack/runtime.8c467249.bundle.js" defer="defer" nonce="6aHXeH5aDWbDo4FVUp5QhQ=="></script>
<script src="/assets/webpack/main.de438d25.chunk.js" defer="defer" nonce="6aHXeH5aDWbDo4FVUp5QhQ=="></script>
<script src="/assets/webpack/tracker.4ac2efa2.chunk.js" defer="defer" nonce="6aHXeH5aDWbDo4FVUp5QhQ=="></script>
<script src="/assets/webpack/analytics.3760169f.chunk.js" defer="defer" nonce="6aHXeH5aDWbDo4FVUp5QhQ=="></script>
<script nonce="6aHXeH5aDWbDo4FVUp5QhQ==">
//<![CDATA[
window.snowplowOptions = {"namespace":"gl","hostname":"snowplowprd.trx.gitlab.net","cookieDomain":".gitlab.com","appId":"gitlab","formTracking":true,"linkClickTracking":true}

gl = window.gl || {};
gl.snowplowStandardContext = {"schema":"iglu:com.gitlab/gitlab_standard/jsonschema/1-1-7","data":{"environment":"production","source":"gitlab-rails","correlation_id":"01K487BY608QYATYNF0AAGQJVP","plan":"free","extra":{},"user_id":null,"global_user_id":null,"user_type":null,"is_gitlab_team_member":null,"namespace_id":955836,"ultimate_parent_namespace_id":955836,"project_id":48554092,"feature_enabled_by_namespace_ids":null,"realm":"saas","instance_id":"ea8bf810-1d6f-4a6a-b4fd-93e8cbd8b57f","unique_instance_id":"b5fa1911-0638-5651-8ec4-5b892ef92e35","host_name":"gitlab.com","instance_version":"18.4.0","context_generated_at":"2025-09-03T16:43:11.216Z"}}
gl.snowplowPseudonymizedPageUrl = "https://gitlab.com/namespace955836/project48554092/-/blob/:repository_path?ref_type=masked_ref_type";
gl.maskedDefaultReferrerUrl = "https://gitlab.com/namespace/project/-/tree/id?ref_type%5B%5D=masked_ref_type";
gl.ga4MeasurementId = 'G-ENFH3X7M5Y';
gl.duoEvents = ["ai_question_category","perform_completion_worker","process_gitlab_duo_question","ai_response_time","click_purchase_seats_button_group_duo_pro_home_page","default_answer","detected_high_comment_temperature","detected_repeated_high_comment_temperature","error_answer","execute_llm_method","finish_duo_workflow_execution","forced_high_temperature_commenting","i_quickactions_q","request_ask_help","request_duo_chat_response","requested_comment_temperature","retry_duo_workflow_execution","start_duo_workflow_execution","submit_gitlab_duo_question","tokens_per_embedding","tokens_per_user_request_prompt","tokens_per_user_request_response"];
gl.onlySendDuoEvents = false;


//]]>
</script>
<link rel="preload" href="/assets/application_utilities-e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855.css" as="style" type="text/css" nonce="xw2mm3QgkhZuCt+z1fZtpQ==">
<link rel="preload" href="/assets/application-ee330fe9c931236d2bd0772cf1ae10ec0c47781717a7581b22789e62e1ad85b6.css" as="style" type="text/css" nonce="xw2mm3QgkhZuCt+z1fZtpQ==">
<link rel="preload" href="/assets/highlight/themes/white-f9894e9bc9414456158c25fb1a2f853ace8855b6a40b2b43001d20fb651b5512.css" as="style" type="text/css" nonce="xw2mm3QgkhZuCt+z1fZtpQ==">
<link crossorigin="" href="https://snowplowprd.trx.gitlab.net" rel="preconnect">
<link as="font" crossorigin="" href="/assets/gitlab-sans/GitLabSans-9892dc17af892e03de41625c0ee325117a3b8ee4ba6005f3a3eac68510030aed.woff2" rel="preload">
<link as="font" crossorigin="" href="/assets/gitlab-sans/GitLabSans-Italic-f96f17332d67b21ada2dfba5f0c0e1d5801eab99330472057bf18edd93d4ccf7.woff2" rel="preload">
<link as="font" crossorigin="" href="/assets/gitlab-mono/GitLabMono-29c2152dac8739499dd0fe5cd37a486ebcc7d4798c9b6d3aeab65b3172375b05.woff2" rel="preload">
<link as="font" crossorigin="" href="/assets/gitlab-mono/GitLabMono-Italic-af36701a2188df32a9dcea12e0424c380019698d4f76da9ad8ea2fd59432cf83.woff2" rel="preload">
<link rel="preload" href="/assets/fonts-deb7ad1d55ca77c0172d8538d53442af63604ff490c74acc2859db295c125bdb.css" as="style" type="text/css" nonce="xw2mm3QgkhZuCt+z1fZtpQ==">



<script src="/assets/webpack/sentry.e832cb15.chunk.js" defer="defer" nonce="6aHXeH5aDWbDo4FVUp5QhQ=="></script>

<script src="/assets/webpack/commons-pages.admin.application_settings.service_accounts-pages.explore.ai_catalog-pages.explore.cat-85566e05.2b2af51a.chunk.js" defer="defer" nonce="6aHXeH5aDWbDo4FVUp5QhQ=="></script>
<script src="/assets/webpack/commons-pages.search.show-super_sidebar.6ee89272.chunk.js" defer="defer" nonce="6aHXeH5aDWbDo4FVUp5QhQ=="></script>
<script src="/assets/webpack/super_sidebar.4766b81d.chunk.js" defer="defer" nonce="6aHXeH5aDWbDo4FVUp5QhQ=="></script>
<script src="/assets/webpack/commons-pages.projects-pages.projects.activity-pages.projects.alert_management.details-pages.project-a2aaf4a3.7d5c8704.chunk.js" defer="defer" nonce="6aHXeH5aDWbDo4FVUp5QhQ=="></script>
<script src="/assets/webpack/commons-pages.admin.application_settings.service_accounts-pages.admin.gitlab_duo.self_hosted-pages.a-58433c1b.eee29ad2.chunk.js" defer="defer" nonce="6aHXeH5aDWbDo4FVUp5QhQ=="></script>
<script src="/assets/webpack/24af373d.8186bc10.chunk.js" defer="defer" nonce="6aHXeH5aDWbDo4FVUp5QhQ=="></script>
<script src="/assets/webpack/commons-pages.groups.packages-pages.groups.registry.repositories-pages.groups.security.policies.edit-429ebfda.c3320bb8.chunk.js" defer="defer" nonce="6aHXeH5aDWbDo4FVUp5QhQ=="></script>
<script src="/assets/webpack/commons-pages.groups.security.policies.edit-pages.groups.security.policies.new-pages.projects.blob.s-f60e2da3.3e2df370.chunk.js" defer="defer" nonce="6aHXeH5aDWbDo4FVUp5QhQ=="></script>
<script src="/assets/webpack/dbe6a049.8c51c52f.chunk.js" defer="defer" nonce="6aHXeH5aDWbDo4FVUp5QhQ=="></script>
<script src="/assets/webpack/commons-pages.projects.blob.show-pages.projects.show-pages.projects.snippets.edit-pages.projects.sni-42df7d4c.4b714bf8.chunk.js" defer="defer" nonce="6aHXeH5aDWbDo4FVUp5QhQ=="></script>
<script src="/assets/webpack/b80d5d1a.5f2c0e8d.chunk.js" defer="defer" nonce="6aHXeH5aDWbDo4FVUp5QhQ=="></script>
<script src="/assets/webpack/4e53015a.e3485942.chunk.js" defer="defer" nonce="6aHXeH5aDWbDo4FVUp5QhQ=="></script>
<script src="/assets/webpack/commons-pages.projects.blob.show-pages.projects.show-pages.projects.snippets.show-pages.projects.tre-c684fcf6.7dbc965c.chunk.js" defer="defer" nonce="6aHXeH5aDWbDo4FVUp5QhQ=="></script>
<script src="/assets/webpack/137afadc.2c49fd23.chunk.js" defer="defer" nonce="6aHXeH5aDWbDo4FVUp5QhQ=="></script>
<script src="/assets/webpack/commons-pages.projects.blob.show-pages.projects.get_started.show-pages.projects.show-pages.projects.tree.show.d4a32dca.chunk.js" defer="defer" nonce="6aHXeH5aDWbDo4FVUp5QhQ=="></script>
<script src="/assets/webpack/commons-pages.projects.blob.show-pages.projects.commits.show-pages.projects.show-pages.projects.tree.show.c7290135.chunk.js" defer="defer" nonce="6aHXeH5aDWbDo4FVUp5QhQ=="></script>
<script src="/assets/webpack/commons-pages.projects.blob.show-pages.projects.show-pages.projects.tree.show.cbea359d.chunk.js" defer="defer" nonce="6aHXeH5aDWbDo4FVUp5QhQ=="></script>
<script src="/assets/webpack/pages.projects.blob.show.99aaa7e4.chunk.js" defer="defer" nonce="6aHXeH5aDWbDo4FVUp5QhQ=="></script>

<meta content="object" property="og:type">
<meta content="GitLab" property="og:site_name">
<meta content="src/wasm/veilid_wasm.js · main · Brandon Vandegrift / veilid-example-vanilla-js · GitLab" property="og:title">
<meta content="GitLab.com" property="og:description">
<meta content="https://gitlab.com/assets/twitter_card-570ddb06edf56a2312253c5872489847a0f385112ddbcd71ccfa1570febab5d2.jpg" property="og:image">
<meta content="64" property="og:image:width">
<meta content="64" property="og:image:height">
<meta content="https://gitlab.com/bmv437/veilid-example-vanilla-js/-/blob/main/src/wasm/veilid_wasm.js?ref_type=heads" property="og:url">
<meta content="summary" property="twitter:card">
<meta content="src/wasm/veilid_wasm.js · main · Brandon Vandegrift / veilid-example-vanilla-js · GitLab" property="twitter:title">
<meta content="GitLab.com" property="twitter:description">
<meta content="https://gitlab.com/assets/twitter_card-570ddb06edf56a2312253c5872489847a0f385112ddbcd71ccfa1570febab5d2.jpg" property="twitter:image">

<meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token" content="NT2CA2i2V0iQHF0u82SbRJM8KrfDq_m-mUA-E9MwMKFjGHVm8KPngSthhxpWw9mQgcgmLc77qgxtpZTjWaqPkA" />
<meta name="csp-nonce" content="6aHXeH5aDWbDo4FVUp5QhQ==" />
<meta name="action-cable-url" content="/-/cable" />
<link href="/-/manifest.json" rel="manifest">
<link rel="icon" type="image/png" href="/assets/favicon-72a2cad5025aa931d6ea56c3201d1f18e68a8cd39788c7c80d5b2b82aa5143ef.png" id="favicon" data-original-href="/assets/favicon-72a2cad5025aa931d6ea56c3201d1f18e68a8cd39788c7c80d5b2b82aa5143ef.png" />
<link rel="apple-touch-icon" type="image/x-icon" href="/assets/apple-touch-icon-b049d4bc0dd9626f31db825d61880737befc7835982586d015bded10b4435460.png" />
<link href="/search/opensearch.xml" rel="search" title="Search GitLab" type="application/opensearchdescription+xml">




<meta content="GitLab.com" name="description">
<meta content="#ececef" name="theme-color">
</head>

<body class="tab-width-8 gl-browser-firefox gl-platform-windows body-fixed-scrollbar" data-namespace-id="955836" data-page="projects:blob:show" data-page-type-id="main/src/wasm/veilid_wasm.js" data-project="veilid-example-vanilla-js" data-project-full-path="bmv437/veilid-example-vanilla-js" data-project-id="48554092" data-project-studio-available="false" data-project-studio-enabled="false">
<div id="js-tooltips-container"></div>
<div id="js-drawer-container"></div>

<script nonce="6aHXeH5aDWbDo4FVUp5QhQ==">
//<![CDATA[
gl = window.gl || {};
gl.client = {"isFirefox":true,"isWindows":true};


//]]>
</script>


<header class="header-logged-out" data-testid="navbar">
<a class="gl-sr-only gl-accessibility" href="#content-body">Skip to content</a>
<div class="container-fluid">
<nav aria-label="Explore GitLab" class="header-logged-out-nav gl-flex gl-gap-3 gl-justify-between">
<div class="gl-flex gl-items-center gl-gap-1">
<span class="gl-sr-only">GitLab</span>
<a title="Homepage" id="logo" class="header-logged-out-logo has-tooltip" aria-label="Homepage" data-track-label="main_navigation" data-track-action="click_gitlab_logo_link" data-track-property="navigation_top" href="/"><svg aria-hidden="true" role="img" class="tanuki-logo" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path class="tanuki-shape tanuki" d="m24.507 9.5-.034-.09L21.082.562a.896.896 0 0 0-1.694.091l-2.29 7.01H7.825L5.535.653a.898.898 0 0 0-1.694-.09L.451 9.411.416 9.5a6.297 6.297 0 0 0 2.09 7.278l.012.01.03.022 5.16 3.867 2.56 1.935 1.554 1.176a1.051 1.051 0 0 0 1.268 0l1.555-1.176 2.56-1.935 5.197-3.89.014-.01A6.297 6.297 0 0 0 24.507 9.5Z"
        fill="#E24329"/>
  <path class="tanuki-shape right-cheek" d="m24.507 9.5-.034-.09a11.44 11.44 0 0 0-4.56 2.051l-7.447 5.632 4.742 3.584 5.197-3.89.014-.01A6.297 6.297 0 0 0 24.507 9.5Z"
        fill="#FC6D26"/>
  <path class="tanuki-shape chin" d="m7.707 20.677 2.56 1.935 1.555 1.176a1.051 1.051 0 0 0 1.268 0l1.555-1.176 2.56-1.935-4.743-3.584-4.755 3.584Z"
        fill="#FCA326"/>
  <path class="tanuki-shape left-cheek" d="M5.01 11.461a11.43 11.43 0 0 0-4.56-2.05L.416 9.5a6.297 6.297 0 0 0 2.09 7.278l.012.01.03.022 5.16 3.867 4.745-3.584-7.444-5.632Z"
        fill="#FC6D26"/>
</svg>

</a></div>
<ul class="gl-list-none gl-p-0 gl-m-0 gl-flex gl-gap-3 gl-items-center gl-grow">
<li class="header-logged-out-nav-item header-logged-out-dropdown md:gl-hidden">
<button class="header-logged-out-toggle" data-toggle="dropdown" type="button">
<span class="gl-sr-only">
Menu
</span>
<svg class="s16" data-testid="hamburger-icon"><use href="/assets/icons-62cd41f10569bb5050df02409792752f47c042aa91f8d59f11b48b79e724f90d.svg#hamburger"></use></svg>
</button>
<div class="dropdown-menu">
<ul>
<li>
<a href="https://about.gitlab.com/why-gitlab">Why GitLab
</a></li>
<li>
<a href="https://about.gitlab.com/pricing">Pricing
</a></li>
<li>
<a href="https://about.gitlab.com/sales">Contact Sales
</a></li>
<li>
<a href="/explore">Explore</a>
</li>
</ul>
</div>
</li>
<li class="header-logged-out-nav-item gl-hidden md:gl-inline-block">
<a href="https://about.gitlab.com/why-gitlab">Why GitLab
</a></li>
<li class="header-logged-out-nav-item gl-hidden md:gl-inline-block">
<a href="https://about.gitlab.com/pricing">Pricing
</a></li>
<li class="header-logged-out-nav-item gl-hidden gl-inline-block">
<a href="https://about.gitlab.com/sales">Contact Sales
</a></li>
<li class="header-logged-out-nav-item gl-hidden md:gl-inline-block">
<a class="" href="/explore">Explore</a>
</li>
</ul>
<ul class="gl-list-none gl-p-0 gl-m-0 gl-flex gl-gap-3 gl-items-center gl-justify-end">
<li class="header-logged-out-nav-item">
<a href="/users/sign_in?redirect_to_referer=yes">Sign in</a>
</li>
<li class="header-logged-out-nav-item">
<a class="gl-button btn btn-md btn-confirm !gl-inline-flex" href="/users/sign_up"><span class="gl-button-text">
Get free trial

</span>

</a></li>
</ul>
</nav>
</div>
</header>

<div class="layout-page page-with-super-sidebar">
<aside class="js-super-sidebar super-sidebar super-sidebar-loading" data-command-palette="{&quot;project_files_url&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/files/main?format=json&quot;,&quot;project_blob_url&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/blob/main&quot;}" data-force-desktop-expanded-sidebar="" data-is-saas="true" data-root-path="/" data-sidebar="{&quot;whats_new_most_recent_release_items_count&quot;:8,&quot;whats_new_version_digest&quot;:&quot;6f24b198287104833a652f3b37450d5ab5702f79cd958edca94b60e66b267957&quot;,&quot;whats_new_read_articles&quot;:[],&quot;whats_new_mark_as_read_path&quot;:&quot;/-/whats_new/mark_as_read&quot;,&quot;is_logged_in&quot;:false,&quot;compare_plans_url&quot;:&quot;https://about.gitlab.com/pricing&quot;,&quot;context_switcher_links&quot;:[{&quot;title&quot;:&quot;Explore&quot;,&quot;link&quot;:&quot;/explore&quot;,&quot;icon&quot;:&quot;compass&quot;}],&quot;current_menu_items&quot;:[{&quot;id&quot;:&quot;project_overview&quot;,&quot;title&quot;:&quot;veilid-example-vanilla-js&quot;,&quot;entity_id&quot;:48554092,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js&quot;,&quot;link_classes&quot;:&quot;shortcuts-project&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;manage_menu&quot;,&quot;title&quot;:&quot;Manage&quot;,&quot;icon&quot;:&quot;users&quot;,&quot;avatar_shape&quot;:&quot;rect&quot;,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js/activity&quot;,&quot;is_active&quot;:false,&quot;items&quot;:[{&quot;id&quot;:&quot;activity&quot;,&quot;title&quot;:&quot;Activity&quot;,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js/activity&quot;,&quot;link_classes&quot;:&quot;shortcuts-project-activity&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;members&quot;,&quot;title&quot;:&quot;Members&quot;,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/project_members&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;labels&quot;,&quot;title&quot;:&quot;Labels&quot;,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/labels&quot;,&quot;is_active&quot;:false}],&quot;separated&quot;:false},{&quot;id&quot;:&quot;plan_menu&quot;,&quot;title&quot;:&quot;Plan&quot;,&quot;icon&quot;:&quot;planning&quot;,&quot;avatar_shape&quot;:&quot;rect&quot;,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/issues&quot;,&quot;is_active&quot;:false,&quot;items&quot;:[{&quot;id&quot;:&quot;project_issue_list&quot;,&quot;title&quot;:&quot;Issues&quot;,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/issues&quot;,&quot;link_classes&quot;:&quot;shortcuts-issues has-sub-items&quot;,&quot;pill_count_field&quot;:&quot;openIssuesCount&quot;,&quot;pill_count_dynamic&quot;:false,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;boards&quot;,&quot;title&quot;:&quot;Issue boards&quot;,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/boards&quot;,&quot;link_classes&quot;:&quot;shortcuts-issue-boards&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;milestones&quot;,&quot;title&quot;:&quot;Milestones&quot;,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/milestones&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;project_wiki&quot;,&quot;title&quot;:&quot;Wiki&quot;,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/wikis/home&quot;,&quot;link_classes&quot;:&quot;shortcuts-wiki&quot;,&quot;is_active&quot;:false}],&quot;separated&quot;:false},{&quot;id&quot;:&quot;code_menu&quot;,&quot;title&quot;:&quot;Code&quot;,&quot;icon&quot;:&quot;code&quot;,&quot;avatar_shape&quot;:&quot;rect&quot;,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/merge_requests&quot;,&quot;is_active&quot;:true,&quot;items&quot;:[{&quot;id&quot;:&quot;project_merge_request_list&quot;,&quot;title&quot;:&quot;Merge requests&quot;,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/merge_requests&quot;,&quot;link_classes&quot;:&quot;shortcuts-merge_requests&quot;,&quot;pill_count_field&quot;:&quot;openMergeRequestsCount&quot;,&quot;pill_count_dynamic&quot;:false,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;files&quot;,&quot;title&quot;:&quot;Repository&quot;,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/tree/main&quot;,&quot;link_classes&quot;:&quot;shortcuts-tree&quot;,&quot;is_active&quot;:true},{&quot;id&quot;:&quot;branches&quot;,&quot;title&quot;:&quot;Branches&quot;,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/branches&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;commits&quot;,&quot;title&quot;:&quot;Commits&quot;,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/commits/main?ref_type=heads&quot;,&quot;link_classes&quot;:&quot;shortcuts-commits&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;tags&quot;,&quot;title&quot;:&quot;Tags&quot;,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/tags&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;graphs&quot;,&quot;title&quot;:&quot;Repository graph&quot;,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/network/main?ref_type=heads&quot;,&quot;link_classes&quot;:&quot;shortcuts-network&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;compare&quot;,&quot;title&quot;:&quot;Compare revisions&quot;,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/compare?from=main\u0026to=main&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;project_snippets&quot;,&quot;title&quot;:&quot;Snippets&quot;,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/snippets&quot;,&quot;link_classes&quot;:&quot;shortcuts-snippets&quot;,&quot;is_active&quot;:false}],&quot;separated&quot;:false},{&quot;id&quot;:&quot;build_menu&quot;,&quot;title&quot;:&quot;Build&quot;,&quot;icon&quot;:&quot;rocket&quot;,&quot;avatar_shape&quot;:&quot;rect&quot;,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/pipelines&quot;,&quot;is_active&quot;:false,&quot;items&quot;:[{&quot;id&quot;:&quot;pipelines&quot;,&quot;title&quot;:&quot;Pipelines&quot;,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/pipelines&quot;,&quot;link_classes&quot;:&quot;shortcuts-pipelines&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;jobs&quot;,&quot;title&quot;:&quot;Jobs&quot;,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/jobs&quot;,&quot;link_classes&quot;:&quot;shortcuts-builds&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;pipeline_schedules&quot;,&quot;title&quot;:&quot;Pipeline schedules&quot;,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/pipeline_schedules&quot;,&quot;link_classes&quot;:&quot;shortcuts-builds&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;artifacts&quot;,&quot;title&quot;:&quot;Artifacts&quot;,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/artifacts&quot;,&quot;link_classes&quot;:&quot;shortcuts-builds&quot;,&quot;is_active&quot;:false}],&quot;separated&quot;:false},{&quot;id&quot;:&quot;deploy_menu&quot;,&quot;title&quot;:&quot;Deploy&quot;,&quot;icon&quot;:&quot;deployments&quot;,&quot;avatar_shape&quot;:&quot;rect&quot;,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/releases&quot;,&quot;is_active&quot;:false,&quot;items&quot;:[{&quot;id&quot;:&quot;releases&quot;,&quot;title&quot;:&quot;Releases&quot;,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/releases&quot;,&quot;link_classes&quot;:&quot;shortcuts-deployments-releases&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;packages_registry&quot;,&quot;title&quot;:&quot;Package registry&quot;,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/packages&quot;,&quot;link_classes&quot;:&quot;shortcuts-container-registry&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;container_registry&quot;,&quot;title&quot;:&quot;Container registry&quot;,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js/container_registry&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;model_registry&quot;,&quot;title&quot;:&quot;Model registry&quot;,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/ml/models&quot;,&quot;is_active&quot;:false}],&quot;separated&quot;:false},{&quot;id&quot;:&quot;operations_menu&quot;,&quot;title&quot;:&quot;Operate&quot;,&quot;icon&quot;:&quot;cloud-pod&quot;,&quot;avatar_shape&quot;:&quot;rect&quot;,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/environments&quot;,&quot;is_active&quot;:false,&quot;items&quot;:[{&quot;id&quot;:&quot;environments&quot;,&quot;title&quot;:&quot;Environments&quot;,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/environments&quot;,&quot;link_classes&quot;:&quot;shortcuts-environments&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;infrastructure_registry&quot;,&quot;title&quot;:&quot;Terraform modules&quot;,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/terraform_module_registry&quot;,&quot;is_active&quot;:false}],&quot;separated&quot;:false},{&quot;id&quot;:&quot;monitor_menu&quot;,&quot;title&quot;:&quot;Monitor&quot;,&quot;icon&quot;:&quot;monitor&quot;,&quot;avatar_shape&quot;:&quot;rect&quot;,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/incidents&quot;,&quot;is_active&quot;:false,&quot;items&quot;:[{&quot;id&quot;:&quot;incidents&quot;,&quot;title&quot;:&quot;Incidents&quot;,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/incidents&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;service_desk&quot;,&quot;title&quot;:&quot;Service Desk&quot;,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/issues/service_desk&quot;,&quot;is_active&quot;:false}],&quot;separated&quot;:false},{&quot;id&quot;:&quot;analyze_menu&quot;,&quot;title&quot;:&quot;Analyze&quot;,&quot;icon&quot;:&quot;chart&quot;,&quot;avatar_shape&quot;:&quot;rect&quot;,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/value_stream_analytics&quot;,&quot;is_active&quot;:false,&quot;items&quot;:[{&quot;id&quot;:&quot;cycle_analytics&quot;,&quot;title&quot;:&quot;Value stream analytics&quot;,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/value_stream_analytics&quot;,&quot;link_classes&quot;:&quot;shortcuts-project-cycle-analytics&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;contributors&quot;,&quot;title&quot;:&quot;Contributor analytics&quot;,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/graphs/main?ref_type=heads&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;ci_cd_analytics&quot;,&quot;title&quot;:&quot;CI/CD analytics&quot;,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/pipelines/charts&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;repository_analytics&quot;,&quot;title&quot;:&quot;Repository analytics&quot;,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/graphs/main/charts&quot;,&quot;link_classes&quot;:&quot;shortcuts-repository-charts&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;model_experiments&quot;,&quot;title&quot;:&quot;Model experiments&quot;,&quot;link&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/ml/experiments&quot;,&quot;is_active&quot;:false}],&quot;separated&quot;:false}],&quot;current_context_header&quot;:&quot;Project&quot;,&quot;support_path&quot;:&quot;https://about.gitlab.com/get-help/&quot;,&quot;docs_path&quot;:&quot;/help/docs&quot;,&quot;display_whats_new&quot;:true,&quot;show_version_check&quot;:null,&quot;search&quot;:{&quot;search_path&quot;:&quot;/search&quot;,&quot;issues_path&quot;:&quot;/dashboard/issues&quot;,&quot;mr_path&quot;:&quot;/dashboard/merge_requests&quot;,&quot;autocomplete_path&quot;:&quot;/search/autocomplete&quot;,&quot;settings_path&quot;:&quot;/search/settings&quot;,&quot;search_context&quot;:{&quot;project&quot;:{&quot;id&quot;:48554092,&quot;name&quot;:&quot;veilid-example-vanilla-js&quot;},&quot;project_metadata&quot;:{&quot;mr_path&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/merge_requests&quot;,&quot;issues_path&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/issues&quot;},&quot;code_search&quot;:true,&quot;ref&quot;:&quot;main&quot;,&quot;scope&quot;:null,&quot;for_snippets&quot;:null}},&quot;panel_type&quot;:&quot;project&quot;,&quot;shortcut_links&quot;:[{&quot;title&quot;:&quot;Snippets&quot;,&quot;href&quot;:&quot;/explore/snippets&quot;,&quot;css_class&quot;:&quot;dashboard-shortcuts-snippets&quot;},{&quot;title&quot;:&quot;Groups&quot;,&quot;href&quot;:&quot;/explore/groups&quot;,&quot;css_class&quot;:&quot;dashboard-shortcuts-groups&quot;},{&quot;title&quot;:&quot;Projects&quot;,&quot;href&quot;:&quot;/explore/projects/starred&quot;,&quot;css_class&quot;:&quot;dashboard-shortcuts-projects&quot;}],&quot;terms&quot;:&quot;/-/users/terms&quot;}"></aside>


<div class="content-wrapper">
<div class="broadcast-wrapper">



</div>
<div class="alert-wrapper alert-wrapper-top-space gl-flex gl-flex-col gl-gap-3 container-fluid container-limited">




























</div>

<div class="top-bar-fixed container-fluid" data-testid="top-bar">
<div class="top-bar-container gl-flex gl-items-center gl-gap-2">
<div class="gl-grow gl-basis-0 gl-flex gl-items-center gl-justify-start gl-gap-3">
<button class="gl-button btn btn-icon btn-md btn-default btn-default-tertiary js-super-sidebar-toggle-expand super-sidebar-toggle -gl-ml-3" aria-controls="super-sidebar" aria-expanded="false" aria-label="Primary navigation sidebar" type="button"><svg class="s16 gl-icon gl-button-icon " data-testid="sidebar-icon"><use href="/assets/icons-62cd41f10569bb5050df02409792752f47c042aa91f8d59f11b48b79e724f90d.svg#sidebar"></use></svg>

</button>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Brandon Vandegrift","item":"https://gitlab.com/bmv437"},{"@type":"ListItem","position":2,"name":"veilid-example-vanilla-js","item":"https://gitlab.com/bmv437/veilid-example-vanilla-js"},{"@type":"ListItem","position":3,"name":"Repository","item":"https://gitlab.com/bmv437/veilid-example-vanilla-js/-/blob/main/src/wasm/veilid_wasm.js?ref_type=heads"}]}


</script>
<div data-testid="breadcrumb-links" id="js-vue-page-breadcrumbs-wrapper">
<div data-breadcrumbs-json="[{&quot;text&quot;:&quot;Brandon Vandegrift&quot;,&quot;href&quot;:&quot;/bmv437&quot;,&quot;avatarPath&quot;:null},{&quot;text&quot;:&quot;veilid-example-vanilla-js&quot;,&quot;href&quot;:&quot;/bmv437/veilid-example-vanilla-js&quot;,&quot;avatarPath&quot;:null},{&quot;text&quot;:&quot;Repository&quot;,&quot;href&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/blob/main/src/wasm/veilid_wasm.js?ref_type=heads&quot;,&quot;avatarPath&quot;:null}]" id="js-vue-page-breadcrumbs"></div>
<div id="js-injected-page-breadcrumbs"></div>
<div id="js-page-breadcrumbs-extra"></div>
</div>


</div>
</div>
</div>

<div class="container-fluid container-limited project-highlight-puc">
<main class="content" id="content-body" itemscope itemtype="http://schema.org/SoftwareSourceCode">
<div class="flash-container flash-container-page sticky" data-testid="flash-container">
<div id="js-global-alerts"></div>
</div>






<div class="js-signature-container" data-signatures-path="/bmv437/veilid-example-vanilla-js/-/commits/bc98f4b7d840756996022fdc2f6618d93d10a38c/signatures?limit=1"></div>

<div class="tree-holder gl-pt-4" id="tree-holder">
<div data-blob-path="src/wasm/veilid_wasm.js" data-breadcrumbs-can-collaborate="false" data-breadcrumbs-can-edit-tree="false" data-breadcrumbs-can-push-code="false" data-breadcrumbs-can-push-to-branch="false" data-breadcrumbs-new-blob-path="/bmv437/veilid-example-vanilla-js/-/new/main" data-breadcrumbs-new-branch-path="/bmv437/veilid-example-vanilla-js/-/branches/new" data-breadcrumbs-new-dir-path="/bmv437/veilid-example-vanilla-js/-/create_dir/main" data-breadcrumbs-new-tag-path="/bmv437/veilid-example-vanilla-js/-/tags/new" data-breadcrumbs-upload-path="/bmv437/veilid-example-vanilla-js/-/create/main" data-download-links="[{&quot;text&quot;:&quot;zip&quot;,&quot;path&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/archive/main/veilid-example-vanilla-js-main.zip&quot;},{&quot;text&quot;:&quot;tar.gz&quot;,&quot;path&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/archive/main/veilid-example-vanilla-js-main.tar.gz&quot;},{&quot;text&quot;:&quot;tar.bz2&quot;,&quot;path&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/archive/main/veilid-example-vanilla-js-main.tar.bz2&quot;},{&quot;text&quot;:&quot;tar&quot;,&quot;path&quot;:&quot;/bmv437/veilid-example-vanilla-js/-/archive/main/veilid-example-vanilla-js-main.tar&quot;}]" data-escaped-ref="main" data-history-link="/bmv437/veilid-example-vanilla-js/-/commits/main" data-http-url="https://gitlab.com/bmv437/veilid-example-vanilla-js.git" data-new-workspace-path="/-/remote_development/workspaces/new" data-organization-id="1" data-project-id="48554092" data-project-path="bmv437/veilid-example-vanilla-js" data-project-root-path="/bmv437/veilid-example-vanilla-js" data-project-short-path="veilid-example-vanilla-js" data-ref="main" data-ref-type="heads" data-root-ref="main" data-ssh-url="git@gitlab.com:bmv437/veilid-example-vanilla-js.git" data-xcode-url="" id="js-repository-blob-header-app"></div>
<div class="info-well">
<div data-history-link="/bmv437/veilid-example-vanilla-js/-/commits/main" id="js-last-commit"></div>
<div class="gl-hidden sm:gl-block">

</div>
</div>
<div class="blob-content-holder js-per-page" data-blame-per-page="1000" id="blob-content-holder">
<div data-blob-path="src/wasm/veilid_wasm.js" data-can-download-code="true" data-escaped-ref="main" data-explain-code-available="false" data-full-name="Brandon Vandegrift / veilid-example-vanilla-js" data-has-revs-file="false" data-new-workspace-path="/-/remote_development/workspaces/new" data-organization-id="1" data-original-branch="main" data-project-path="bmv437/veilid-example-vanilla-js" data-ref-type="heads" data-resource-id="gid://gitlab/Project/48554092" data-user-id="" id="js-view-blob-app">
<div class="gl-spinner-container" role="status"><span aria-hidden class="gl-spinner gl-spinner-md gl-spinner-dark !gl-align-text-bottom"></span><span class="gl-sr-only !gl-absolute">Loading</span>
</div>
</div>
</div>

</div>
<script nonce="6aHXeH5aDWbDo4FVUp5QhQ==">
//<![CDATA[
  window.gl = window.gl || {};
  window.gl.webIDEPath = '/-/ide/project/bmv437/veilid-example-vanilla-js/edit/main/-/src/wasm/veilid_wasm.js'


//]]>
</script>
<div data-ambiguous="false" data-ref="main" id="js-ambiguous-ref-modal"></div>

</main>
</div>


</div>
</div>


<script nonce="6aHXeH5aDWbDo4FVUp5QhQ==">
//<![CDATA[
if ('loading' in HTMLImageElement.prototype) {
  document.querySelectorAll('img.lazy').forEach(img => {
    img.loading = 'lazy';
    let imgUrl = img.dataset.src;
    // Only adding width + height for avatars for now
    if (imgUrl.indexOf('/avatar/') > -1 && imgUrl.indexOf('?') === -1) {
      const targetWidth = img.getAttribute('width') || img.width;
      imgUrl += `?width=${targetWidth}`;
    }
    img.src = imgUrl;
    img.removeAttribute('data-src');
    img.classList.remove('lazy');
    img.classList.add('js-lazy-loaded');
    img.dataset.testid = 'js-lazy-loaded-content';
  });
}

//]]>
</script>
<script nonce="6aHXeH5aDWbDo4FVUp5QhQ==">
//<![CDATA[
gl = window.gl || {};
gl.experiments = {};


//]]>
</script>

</body>
</html>

