# 케이스 스터디 페이지

_Started 2026-06-02 20:58 UTC_

---

## User

홈페이지(main)은 만들필요없어. 다만 케이스 스터디들을 홈페이지 스타일에 맞춰서 각각 만들어줘

## Assistant

_[tool: list_files]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: fig_ls]_

_[tool: read_file]_

_[tool: fig_ls]_

_[tool: fig_ls]_

_[tool: fig_ls]_

_[tool: fig_ls]_

_[tool: fig_read]_

_[tool: fig_read]_

_[tool: fig_read]_

I have case study 2's content. Now let me read case studies 3 and 4.

_[tool: fig_grep]_

_[tool: fig_grep]_

_[tool: fig_read]_

_[tool: fig_read]_

_[tool: fig_read]_

Now case study 4.

_[tool: fig_read]_

_[tool: update_todos]_

I now have all the content I need. Let me set up my plan.

_[tool: write_file]_

Let me create the shared case-study CSS first.

_[tool: str_replace_edit]_

Now refactor the modular case study to use the shared CSS.

_[tool: fig_grep]_

Let me grab the default text for the life-graph metric cards component.

_[tool: write_file]_

I have everything. Now let me build Case Study 2 (Whole-Life Crisis).

_[tool: write_file]_

Now Case Study 3 (Interactive Demo).

_[tool: write_file]_

Now Case Study 4 (Cybersecurity Website Redesign).

_[tool: str_replace_edit]_

Now wire up the Home.html links for the three new case studies.

_[tool: update_todos]_

_[tool: done]_

Let me verify the new case study loads cleanly.

_[tool: fork_verifier_agent]_

All three case studies are built and wired up. Done.

**What I made** — three case studies in the same editorial style as your home page and existing Modular Redesign study:

- **Whole-Life Crisis** — research → life-graph system → product flows, with interview/feedback quote cards and a concept-progression strip.
- **Interactive Demo** — problem/research → strategy → process steps → impact, with a before/after block.
- **Cybersecurity Redesign** — background → 5-step process → key problems → 5 solutions (each with before/after) → iteration → impact metrics (+109% / +133% / +54%).

I also pulled the case-study layout into a shared `case-study.css` so all four studies stay visually consistent, and un-muted the **Full case study →** links on the home page so they now navigate. Images use the same drag-and-drop placeholders as your existing study — drop in the real screenshots when ready.

Two notes:
- The fifth home item (*Endpoint Protection UI*) has no source content in the Figma file, so I left it muted — send me the content and I'll build it to match.
- Roles in the facts list follow your home-page labels (e.g. "Creative Designer"); say the word if you'd prefer the Figma wording.

## User

이미지는 왜 직접 안넣었어?

## Assistant

_[tool: fig_ls]_

_[tool: fig_ls]_

_[tool: fig_ls]_

맞는 지적이에요. 처음엔 기존 Modular 케이스 스터디가 placeholder(이미지 슬롯) 방식이라 그 패턴을 따라간 건데, Figma 파일에 실제 스크린샷들이 다 들어있으니 직접 넣는 게 맞습니다. 지금 넣어드릴게요.

먼저 각 케이스 스터디의 실제 이미지 자산들을 확인하겠습니다.

_[tool: view_image]_

_[tool: view_image]_

Let me view these images and check the component folders for more assets.

_[tool: fig_copy_files]_

Figma assets need to be copied in first. Let me copy them into the project, then inspect.

_[tool: view_image]_

_[tool: view_image]_

_[tool: fig_grep]_

_[tool: fig_grep]_

_[tool: fig_ls]_

_[tool: fig_ls]_

These are the actual life-graphs. Let me check the component folders for the product-flow screenshots (Reflect/Explore) and the other studies' component images.

_[tool: fig_copy_files]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: read_file]_

The explore image is the full product page, reflect is a journey card. Let me check how `image-slot` works — whether I can give it a default image or should use `<img>`.

_[tool: image_metadata]_

_[tool: image_metadata]_

_[tool: image_metadata]_

_[tool: image_metadata]_

`image-slot` takes a `src` attribute (author image, user can still drop to replace) and a `fit` attribute. Perfect — I'll embed the real images that way. Let me get their dimensions to size the figures correctly, and copy the remaining studies' images.

_[tool: fig_grep]_

_[tool: fig_grep]_

Let me find the image assets inside the component subfolders for studies 3 and 4.

_[tool: fig_copy_files]_

Let me copy all the study 3 and 4 images in one batch.

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: image_metadata]_

_[tool: image_metadata]_

_[tool: image_metadata]_

_[tool: image_metadata]_

_[tool: image_metadata]_

_[tool: image_metadata]_

Now let me check dimensions for the remaining images to size figures correctly.

_[tool: view_image]_

_[tool: view_image]_

