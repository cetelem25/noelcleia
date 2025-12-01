# 💖 Valentine’s Day Interactive Date Picker

A sweet and playful web app made with HTML, CSS, and JavaScript that lets users choose between “Yes” or “No” buttons with a fun twist — the “No” button dodges your mouse! When the user clicks “Yes,” they get to pick a romantic date and time with a beautiful video background.

---

##  Demo Preview

### Main Page: Will you go on a date?
- Playful “No” button that moves away on hover  
- “Yes” button leads to date picker page  

### Date Selection Page
- Background video (choose between `happyMelody.mp4` or `myMelody.mp4`)  
- Date & time picker with confirmation  
- Displays the chosen date in a charming format  

---

## 🗂️ Project Files

| File             | Description                                |
| ---------------- | ------------------------------------------|
| `index.html`     | The main interactive question page         |
| `style.css`      | Styling for the main question page          |
| `script.js`      | JavaScript handling the button interactions |
| `date.html`      | The date and time selection page            |
| `date.css`       | Styling for the date selection page          |
| `date.js`        | JavaScript for confirming and displaying the chosen date/time |
| `happyMelody.mp4`| Background video option 1 for the date page |
| `myMelody.mp4`   | Background video option 2 for the date page |

---

##  How to Run

1. Clone or download the project files to your local machine.  
2. Open `index.html` in any modern web browser.  
3. On the main page, try to click “Yes” or catch the dodging “No” button.  
4. Clicking “Yes” will take you to the date picker page.  
5. Select your preferred date and time, then click “Confirm.”  
6. See your chosen date displayed with a romantic background video!

---

##  Customization Tips

- To switch the background video on the date picker page, open `date.html` and update the `<source>` inside the `<video>` tag:

```html
<video autoplay loop muted>
    <source src="happyMelody.mp4" type="video/mp4">
    <!-- or -->
    <source src="myMelody.mp4" type="video/mp4">
</video>
```

---

## 🙋 Author
By **Hein Pyae Sone Htet** dedicated to my gorgeous and precious girlfriend.

