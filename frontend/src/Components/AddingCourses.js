function AddingCourses() {

    const addCourse = () => {}

    return (<>
        <form onSubmit={addCourse}>
            <div>Name: </div>
            <input type="text"/>
            <div>Level: </div>
            <input type="text"/>
            <div class="input-group mb-3">
                <select class="custom-select" id="inputGroupSelect01">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div>Hours: </div>
            <input type="number"/>
            <div>Status: </div>
            <input type="text"/>
            <button>Submit</button>
        </form>
    </>)
}

export default AddingCourses;