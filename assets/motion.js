(function (root) {
  let matchMediaContext = null;

  function hasGsap() {
    return typeof root.gsap !== "undefined";
  }

  function elements(selector) {
    return root.gsap.utils.toArray(selector).filter(Boolean);
  }

  function fromIf(timeline, targets, vars, position) {
    if (targets.length) timeline.from(targets, vars, position);
  }

  function setIf(gsap, targets, vars) {
    if (targets.length) gsap.set(targets, vars);
  }

  function pageReady() {
    if (!hasGsap()) return;

    const gsap = root.gsap;
    if (matchMediaContext) matchMediaContext.revert();

    gsap.defaults({ duration: 0.42, ease: "power2.out", overwrite: "auto" });
    matchMediaContext = gsap.matchMedia();

    matchMediaContext.add(
      {
        reduceMotion: "(prefers-reduced-motion: reduce)",
        desktop: "(min-width: 861px)",
      },
      (context) => {
        const reduceMotion = context.conditions.reduceMotion;
        if (reduceMotion) {
          setIf(
            gsap,
            elements("[data-motion], .course-card, .topic-card, .reply .card, .reply .tldr, .paper-section, .practice-item, .case-doc-group, .reading-article"),
            { clearProps: "all" }
          );
          return;
        }

        const heroItems = elements(".breadcrumb, .home-hero .hero-copy, .course-hero > div, .course-panel, .toolbar-section");
        const listingItems = elements(".course-card, .topic-card");
        const contentItems = elements(".topic-main > .eyebrow, .topic-main > h1, .topic-main > .title-subtitle, .reply > *, .topic-nav");
        const sidebarItems = elements(".topic-sidebar > *");
        const progressItems = elements(".progress-line span, .course-roadmap b");

        const intro = gsap.timeline({ defaults: { duration: 0.48, ease: "power3.out" } });
        fromIf(intro, heroItems, { y: 18, autoAlpha: 0, stagger: 0.045, clearProps: "transform,visibility" });
        fromIf(intro, listingItems.slice(0, 40), { y: 16, autoAlpha: 0, stagger: 0.018, clearProps: "transform,visibility" }, "<0.08");
        fromIf(intro, contentItems.slice(0, 36), { y: 14, autoAlpha: 0, stagger: 0.026, clearProps: "transform,visibility" }, "<0.06");
        fromIf(
          intro,
          sidebarItems,
          { x: context.conditions.desktop ? -10 : 0, y: context.conditions.desktop ? 0 : 10, autoAlpha: 0, stagger: 0.035, clearProps: "transform,visibility" },
          "<0.02"
        );

        if (progressItems.length) {
          gsap.from(progressItems, {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.035,
            clearProps: "transform",
          });
        }

        elements(".course-card, .topic-card, .headline-category-link, .topic-jump-list a").forEach((item) => {
          item.addEventListener("mouseenter", () => {
            gsap.to(item, { y: -3, duration: 0.16, ease: "power2.out" });
          });
          item.addEventListener("mouseleave", () => {
            gsap.to(item, { y: 0, x: 0, duration: 0.2, ease: "power2.out" });
          });
        });
      }
    );
  }

  root.StudyMotion = { pageReady };
})(typeof self !== "undefined" ? self : this);
