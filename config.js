/* ============================================================
   WEAR / RARE  -  site settings
   Everything you are likely to change lives in this one file.
   Edit it right on GitHub (pencil icon), then "Commit changes".
   ============================================================ */
window.WR = {
  // ---- identity / links ----
  igHandle: "very_wear_apparel",
  personalIg: "sagejoygold",
  depop: "illa9",
  venmo: "very_wear_apparel",

  // ---- where requests go ----------------------------------
  // Option A (recommended): a free form service that emails you every request.
  //   Web3Forms  -> formEndpoint: "https://api.web3forms.com/submit", formAccessKey: "YOUR_KEY"
  //   Formspree  -> formEndpoint: "https://formspree.io/f/XXXXXXXX"
  // Option B: leave both blank and put an email below (opens the guest's email app),
  //   or leave everything blank and requests go to his Instagram DM.
  formEndpoint: "",
  formAccessKey: "",
  email: "",

  // ---- showroom (appointment only) -------------------------
  showroomNote: "The showroom address is shared with confirmed guests only.",
  slotMinutes: 60,        // length of one appointment
  leadHours: 24,          // earliest bookable time from now
  daysAhead: 42,          // how far ahead people can request
  maxGuests: 4,
  // Opening hours by weekday (0 = Sunday ... 6 = Saturday), 24h "HH:MM".
  // null = closed. THESE ARE PLACEHOLDERS - set his real hours.
  hours: {
    0: null,
    1: null,
    2: null,
    3: null,
    4: ["12:00", "18:00"],
    5: ["12:00", "18:00"],
    6: ["11:00", "17:00"]
  },
  closedDates: [],        // e.g. ["2026-12-25", "2026-12-31"]

  // ---- services (shown on Stylist + Book pages) -------------
  // price: leave "" to show "Inquire"
  services: [
    { id: "showroom", name: "Showroom Visit", blurb: "Private shopping in the showroom. Browse the racks with him on hand.", price: "" },
    { id: "styling", name: "Styling Session", blurb: "One-on-one styling for a look, a season, or a whole identity.", price: "" },
    { id: "closet", name: "Closet Edit", blurb: "Go through what you own. Keep, restyle, release, and find the gaps.", price: "" },
    { id: "sourcing", name: "Sourcing Request", blurb: "Looking for a specific label, era, or grail? He hunts it.", price: "" },
    { id: "muse", name: "Muse Collaboration", blurb: "Shoots, looks, and creative projects built around a muse.", price: "" }
  ],

  // ---- Sip & Thrift ----------------------------------------
  sipThrift: {
    date: "",             // e.g. "Saturday, December 13"
    time: "",             // e.g. "6 - 9 PM"
    where: "Showroom, address sent to invited guests",
    note: "By invitation. Guests are selected, then invited."
  },

  // ---- checkout notes --------------------------------------
  shipping: "Pickup at the showroom by appointment, or shipping. Shipping is quoted after you pay and he confirms by message."
};
