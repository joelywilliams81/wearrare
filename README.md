# Wear / Rare

Storefront, archive, stylist services, muse inquiries, Sip & Thrift invites and appointment booking for **@very_wear_apparel**. Plain HTML, CSS and JavaScript. No build tools needed to run it.

Live address (once Pages is on): `https://joelywilliams81.github.io/wearrare/`

## 1. Turn the site on (one time)

1. Repo **Settings > Pages**
2. Source: **Deploy from a branch**. Branch: **main**, folder **/ (root)**. Save.
3. Wait about a minute. The address appears at the top of that page.

## 2. The files you will actually edit

| File | What it controls |
|---|---|
| `config.js` | Venmo handle, links, showroom hours, services, Sip & Thrift date, where requests are delivered |
| `products.js` | Every piece in the shop and the Archive |
| `images/pieces/` | Photos of pieces |
| `tools/build.py` | Page copy (headlines, paragraphs). Run `python3 tools/build.py` after editing, then commit the changed `.html` files |

Edit any file on GitHub with the pencil icon, then **Commit changes**. The site updates in about a minute.

## 3. Adding pieces and photos

1. Upload photos to `images/pieces/` (**Add file > Upload files**). Name them clearly, like `wr-007-front.jpg`.
2. Open `products.js`, copy the EXAMPLE block at the top, paste it at the top of the list, and fill it in.
3. Commit.

Statuses: `available` (buyable), `hold`, `sold`, `archive` (not for sale, shown in The Archive), `coming` (placeholder frame). To fill the empty frames, change `status` to `available` or `archive`, add a price and photos, and fill in the details.

Tip: crop photos to 4:5 portrait and keep each under about 500 KB so the site stays fast.

## 4. Checkout (Venmo)

Pieces go into a bag. At checkout the buyer enters details, then taps **Open Venmo**. On a phone this opens the Venmo app with the amount and note filled in. On a computer it opens his Venmo profile and shows the exact amount and note to enter. He confirms payment in the Venmo app, then arranges pickup or shipping with the buyer.

Because every piece is one of one, mark a piece `sold` in `products.js` as soon as it is paid for.

**Venmo and business sales:** Venmo asks sellers to take payment for goods through a Venmo business profile, not a personal one. A business profile also adds purchase protection for buyers. It's worth setting up before real sales.

## 5. Where requests go (orders, bookings, invites, muse inquiries)

A website with no server cannot email you by itself. Pick one:

- **Best: a free form service.** Create a free account at web3forms.com (or formspree.io), copy your key or form URL into `config.js` (`formEndpoint` and `formAccessKey`). Every request then lands in your email.
- **No setup:** leave them blank. The guest sees their request as text with a button to copy it and open an Instagram DM to @very_wear_apparel. Add `email` in `config.js` to also offer an email button.

## 6. Appointments

Set real opening hours and slot length in `config.js` (`hours`, `slotMinutes`, `leadHours`, `closedDates`). The booking page shows only open days and future times. Guests submit a **request**, and he confirms by message. Two guests can request the same time slot, so he decides who gets it. Guests can download a calendar file for their request.

## 7. Sip & Thrift

Fill in `sipThrift` in `config.js` once the date is set. The page is built for an invitation-only event: guests request an invite, he selects who comes, and the address is shared only with those he invites.
