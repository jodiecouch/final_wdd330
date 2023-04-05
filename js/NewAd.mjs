
function newAdTemplate()
{
    let text = `<p>Under Construction - the Create Listing button will get the form field data but doesn't do anything with it besides print it to console. 
    I don't know how I would save the images to a server since I don't really have a server. Also, I would be interested in how sites save user uploaded images and keep them associated with the correct listing.</p>
    <form id="newAd" name="create">
        <fieldset class="col1">
          <label for="year">Year</label>
          <select name="year" id="year">
            <option value="1981">1981</option>
            <option value="1982">1982</option>
            <option value="1983">1983</option>
            <option value="1984">1984</option>
            <!--1981 - 2023-->
          </select>

          <label for="model"> Model</label>
          <select name="model" id="model">
            <option value="1500">1500</option>
            <option value="2500">2500</option>
            <option value="3500">3500</option>
          </select>

          <label for="miles">Miles</label>
          <input type="text" name="miles" id="miles" />

          <label for="trim">Trim</label>
          <select name="trim" id="trim">
            Trim
            <option value="slt">SLT</option>
          </select>

          <label for="drive">Drivetrain </label>
          <select name="drive" id="drive">
            <option value="4wd">4WD</option>
            <option value="2wd">2WD</option>
          </select>

          <label for="tran">Transmission</label>
          <select name="tran" id="tran">
            <option value="manual">Manual</option>
            <option value="automatic">Automatic</option>
          </select>

          <label for="valve">Valves</label>
          <select name="valve" id="valve">
            <option value="12v">12 Valve</option>
            <option value="24v">24 Valve</option>
          </select>

          <label for="gen">Generation</label>
          <select name="gen" id="gen">
            <option value="first">First (1981 - 1993)</option>
            <option value="second">Second (1994 - 2001)</option>
            <option value="third">Third (2002 - 2008)</option>
            <option value="fourth">Fourth (2009 - 2018)</option>
            <option value="fith">Fith (2019 - 2023)</option>
          </select>
          <label for="price">Price</label>
          <input type="text" id="price" name="price" />
        </fieldset>
        <fieldset class="col2">
          <label for="title">Title</label>
          <input type="text" id="title" name="title" />

          <label for="description">Description</label>
          <textarea id="description" name="description" rows="5" cols="50">
          </textarea>

          <div class="pictures">
          <p>Someday in the furture this can handle photos</p>
            <div class="box">
              <div class="js--image-preview"></div>
              <div class="upload-options">
                <label>
                  <input type="file" class="image-upload" accept="image/*" name="images"/>
                </label>
              </div>
            </div>
            <div class="box">
              <div class="js--image-preview"></div>
              <div class="upload-options">
                <label>
                  <input type="file" class="image-upload" accept="image/*" name="images"/>
                </label>
              </div>
            </div>
            <div class="box">
              <div class="js--image-preview"></div>
              <div class="upload-options">
                <label>
                  <input type="file" class="image-upload" accept="image/*" name="images"/>
                </label>
              </div>
            </div>
            <div class="box">
              <div class="js--image-preview"></div>
              <div class="upload-options">
                <label>
                  <input type="file" class="image-upload" accept="image/*" name="images"/>
                </label>
              </div>
            </div>
            <div class="box">
              <div class="js--image-preview"></div>
              <div class="upload-options">
                <label>
                  <input type="file" class="image-upload" accept="image/*" name="images"/>
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <button id="add" type="submit" class="btnSubmit">Create Listing</button>
      </form>`

      return text;
}

export async function loadForm()
{
    
    const html = newAdTemplate();
    const titleElement = document.querySelector(".results");  
    titleElement.insertAdjacentHTML("beforeend", html);
    document.getElementById("newAd").addEventListener('submit', getNewAd);
}

function getNewAd(event)
{
    event.preventDefault();
    const data = new FormData(event.target);
    /*method 1
    const formDataObj = {};
    data.forEach((value, key) => (formDataObj[key] = value));
    console.log(formDataObj);
    */
   /*method 2*/
   const formDataObj = Object.fromEntries(data.entries());
    console.log(formDataObj);
}