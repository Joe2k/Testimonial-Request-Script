# ✍️ Forever Diary Testimonial Request Script

## ❓ Why?

For people like [Nauty](https://github.com/nautivaish) who have too many people to send Testimonial Requests to :')

## 🗒️ How to use?

-   **Install Node, NPM and Yarn**

    -   For Installing Node - [Click here](https://nodejs.org/en/download/)
    -   NPM gets installed automatically with yarn.
    -   For installing Yarn, run the command below or [Check this out](https://classic.yarnpkg.com/lang/en/docs/install/)
        ```
        npm install --global yarn
        ```

-   **Clone this repository**

    ```
    git clone https://github.com/Joe2k/Testimonial-Request-Script.git
    cd Testimonial-Request-Script
    ```

-   **Installing Dependencies**

    After going into the script directory, run the command below

    ```
    yarn
    ```

    It will take some time to install all the necessary dependencies.

-   **Add Your Account Credentials and Note**

    -   Open `config.js` and edit your email, password and the note you want to send along with the Testimonial request to everyone you want.
    -   Leave the note as blank(`''`) if you do not want to send any note.

-   **Make your Testimonial Request sheet ready**

    -   Open this [google sheet](https://docs.google.com/spreadsheets/d/11ZS7uWx4aEG1RybVydsWnRvkpPiw3V7VRjTHnXYg54k/edit?usp=sharing) with bits mail and make a copy of it - `File > Make a copy`
    -   In your copy tick who all you want the send the request to.
    -   **Do not change/remove any columns.**
    -   Once you are done download the sheet as **CSV** - `File > Download > .csv` to the directory of the script and rename it as `sheet.csv`.

-   **Time to run the script 🥳**

    -   You can now run the script with the below command.

    ```
    node app.js
    ```

## 🤗 This script helped?

Take some time and do write me a testimonial :)
