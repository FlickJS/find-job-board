export default function NewForm({addNew}: NewFormProps){
    return (
        <div>
            <h1>New Form</h1>
            <form>
                <label htmlFor="title">Position Title</label>
                <input type="text" name="title" id="title" />
                <label htmlFor="company">Company</label>
                <input type="text" name="company" id="company" />
                <label htmlFor="location">Location</label>
                <input type="text" name="location" id="location" />
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" cols={30} rows={10}></textarea>
                <label htmlFor="salary">Salary</label>
                From:
                <input type="text" name="salary" id="salary" />
                To:
                <input type="text" name="salary" id="salary" />
                <label htmlFor="type">Select Category</label>
                <select>
                    <option value="frontend">Frontend</option>
                    <option value="backend">Backend</option>
                    <option value="fullstack">Fullstack</option>
                    <option value="devops">DevOps</option>
                </select>
                <label htmlFor="type">Select Technologies</label>
                <label htmlFor="html">HTML</label>
                <input type="checkbox" name="html" id="html" />
                <label htmlFor="css">CSS</label>
                <input type="checkbox" name="css" id="css" />
                <label htmlFor="javascript">JavaScript</label>
                <input type="checkbox" name="javascript" id="javascript" />
                <label htmlFor="react">React</label>
                <input type="checkbox" name="react" id="react" />
                <label htmlFor="node">Node</label>
                <input type="checkbox" name="node" id="node" />
                <label htmlFor="python">Python</label>
                <input type="checkbox" name="python" id="python" />
                <label htmlFor="django">Django</label>
                <input type="checkbox" name="django" id="django" />
                <label htmlFor="linux">Linux</label>
                <input type="checkbox" name="linux" id="linux" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

