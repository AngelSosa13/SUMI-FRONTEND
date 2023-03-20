import "../css/addBtn.css"

const Btn = () => {
      return (
            <div>
                <a href="#" className="float">
                    <i className="fa fa-plus my-float"></i>
                </a>
            </div>
      );
    };

export function AddBtn() {
    return (
        <Btn />
    )
}