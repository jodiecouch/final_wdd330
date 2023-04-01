
function newAdTemplate()
{
    let text = ` <form name="create">
        <fieldset>
          <label for="year"
            >Year
            <input list="year" />
            <datalist id="year">
              <option value="1981"></option>
              <option value="1982"></option>
              <option value="1983"></option>
              <option value="1984"></option>
            </datalist>

            <!--1981 - 2023-->
          </label>
          <label for="model">
            Model
            <select name="model" id="model">
              <option value="1500">1500</option>
              <option value="2500">2500</option>
              <option value="3500">3500</option>
            </select>
          </label>
          <label for="miles"
            >Miles
            <input type="text" name="miles" id="miles" />
          </label>
          <label for="trim"
            >Trim
            <select name="trim" id="trim">
              Trim
              <option value="slt">SLT</option>
            </select>
          </label>
          <label for="drive"
            >Drivetrain
            <select name="drive" id="drive">
              <option value="4wd">4WD</option>
              <option value="2wd">2WD</option>
            </select>
          </label>
          <label for="tran"
            >Transmission
            <select name="tran" id="tran">
              <option value="manual">Manual</option>
              <option value="automatic">Automatic</option>
            </select>
          </label>
          <label for="valve"
            >Valves
            <select name="valve" id="valve">
              <option value="12v">12 Valve</option>
              <option value="24v">24 Valve</option>
            </select>
          </label>
          <label for="gen"
            >Generation
            <select name="gen" id="gen">
              <option value="first">First (1981 - 1993)</option>
              <option value="second">Second (1994 - 2001)</option>
              <option value="third">Third (2002 - 2008)</option>
              <option value="fourth">Fourth (2009 - 2018)</option>
              <option value="fith">Fith (2019 - 2023)</option>
            </select>
          </label>
          <label for="title"
            >Title
            <input type="text" id="title" name="title" />
          </label>
          <label for="description"
            >Description
            <textarea id="description" name="description" rows="5" cols="50">
            </textarea>
          </label>
          <label for="price"
            >Price
            <input type="text" id="price" name="price" />
          </label>
        </fieldset>
        <button id="add" type="submit">Create Listing</button>
      </form>`

      return text;
}