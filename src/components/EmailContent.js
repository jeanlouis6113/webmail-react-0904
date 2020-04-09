import React from 'react';

function EmailContent() {
  return (
    <div id="main" class="pure-u-1">
      <div class="email-content">
        <div class="email-content-header pure-g">
          <div class="pure-u-1-2">
            <h1 class="email-content-title">Hello from Toronto</h1>
            <p class="email-content-subtitle">
              From <a>Tilo Mitra</a> at <span>3:56pm, April 3, 2012</span>
            </p>
          </div>

          <div class="email-content-controls pure-u-1-2">
            <button class="secondary-button pure-button">Reply</button>
            <button class="secondary-button pure-button">Forward</button>
            <button class="secondary-button pure-button">Move to</button>
          </div>
        </div>

        <div class="email-content-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
          <p>
            Aliquam ac feugiat dolor. Proin mattis massa sit amet enim iaculis tincidunt. Mauris tempor mi vitae sem aliquet pharetra. Fusce in dui purus, nec malesuada mauris. Curabitur ornare arcu quis mi blandit laoreet. Vivamus imperdiet fermentum mauris, ac posuere urna tempor at. Duis pellentesque justo ac sapien aliquet egestas. Morbi enim mi, porta eget ullamcorper at, pharetra id lorem.
                </p>
          <p>
            Donec sagittis dolor ut quam pharetra pretium varius in nibh. Suspendisse potenti. Donec imperdiet, velit vel adipiscing bibendum, leo eros tristique augue, eu rutrum lacus sapien vel quam. Nam orci arcu, luctus quis vestibulum ut, ullamcorper ut enim. Morbi semper erat quis orci aliquet condimentum. Nam interdum mauris sed massa dignissim rhoncus.
                </p>
          <p>
            Regards,<br />
                Tilo
                </p>
        </div>
      </div>
    </div>
  );
}

export default EmailContent;