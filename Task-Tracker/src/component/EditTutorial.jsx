import { useEffect, useState } from "react";

const EditTutorial = ({ item, editTutorial }) => {
    const [newtask, setNewtask] = useState(tasks)
    const [newdate, setNewdate] = useState(date)
    const {id,tasks,date}=item

    useEffect(() => {
      setNewtask(tasks);
      setNewdate(date);
    }, [tasks, date]);
    
  return (
    <div>
      <div className="modal fade" id="edit-modal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Tutorial
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div>
                <input
                  type="text"
                  value={newtask}
                  onChange={(e) => setNewtask(e.target.value)}
                />
              </div>
              <div className="mt-3">
                <input
                  type="text"
                  value={newdate}
                  onChange={(e) => setNewdate(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTutorial;
