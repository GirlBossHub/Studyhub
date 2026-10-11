# StudyHub prototype (updated)

## Start
1. Extract this ZIP into a folder.
2. Open `index.html` in a modern browser. If your phone code editor has a Preview option, use it; otherwise transfer the extracted folder to your laptop and open `index.html`.
3. Keep the `css` and `js` folders in place.

## New features
- Alarm timer with sound test, stop and 5-minute snooze. Tap the sound test/start button and check your device volume.
- Timetable supports recurring weekly classes and reminder offsets (10 minutes, 5 minutes, and class time). Keep the timetable page open; reliable closed-app alerts need push notifications and a service worker/backend.
- Library search and links to legitimate free resources (Project Gutenberg, OpenStax, DOAB, MDN and Khan Academy). External sites have their own terms and content.
- GPA calculator supports percentage, letter grades (starter mapping A=5, B=4, C=3, D=2, F=0), and numeric 4.0, 5.0 and 10.0 scales, weighted by credits. Configure the letter mapping to match your school.
- Dashboard student-chat demonstration using usernames. It is local to this browser only and is NOT a real internet live chat. A secure backend such as Firebase or Supabase is needed for students on separate devices to communicate.

## Prototype limitations
This is a front-end learning prototype. Data is stored in browser localStorage. Do not enter sensitive personal information or real passwords. Sound and notifications depend on browser/device permissions and may not work if the page is closed, the device is asleep, or the browser suspends the page.


## Latest front-end update
- GPA calculator starts with three clear choices: Letter Grades, Percentage, or Grade Points. Grade-point mode lets the student select a 4.0, 5.0, or 10.0 scale. Percentage-to-points mapping is explicitly labeled as a starter mapping.
- Alarm repeats its sound until Stop or Snooze. Snooze sets a five-minute countdown and rings again. Keep the page open; browsers cannot guarantee alarms after the page is closed or the device sleeps.
- Chat includes local prototype presence indicators and Delete for me / Delete for everyone controls. This is not real multi-user presence or cross-device chat until a backend is added.


## Final layout update
- Student Community now has its own page linked from the dashboard and navigation. The dashboard is an overview and quick-access page rather than containing the chat itself.
- Community members are shown once per display name in the roster, with the existing status updated instead of appending repeated status rows. Stale local demo records are removed.
- Dark/light mode remains available in Settings and the saved preference is applied across pages.
- Presence and chat remain browser-local prototypes; use a secure backend before inviting students to use a shared, multi-device community.
