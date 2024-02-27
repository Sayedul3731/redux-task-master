import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";


const AddTaskModal = ({ isOpen, setIsOpen }) => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        onCancel()
    }
    const onCancel = () => {
        reset();
        setIsOpen(false)
    }
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programming Hero">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="flex flex-col gap-1">
                    <label htmlFor="title">Title</label>
                    <input className="w-full rounded-md" type="text" {...register("name",{required: true})}/>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="title">Description</label>
                    <input className="w-full rounded-md" type="text" {...register("description",{required: true})} />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="title">Deadline</label>
                    <input className="w-full rounded-md" type="date" {...register("date",{required: true})} />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="title">Assign To</label>
                    <select id="assignTo"
                    className="w-full rounded-md"
                    {...register("assignTo",{required: true})}
                    >
                        <option value="MD Sayedul Haque">MD Sayedul Haque</option>
                        <option value="MD Sayedul Haque">MD Sayedul Haque</option>
                        <option value="MD Sayedul Haque">MD Sayedul Haque</option>
                        <option value="MD Sayedul Haque">MD Sayedul Haque</option>
                        <option value="Taki">Taki</option>
                        <option value="MD Sayedul Haque">MD Sayedul Haque</option>
                    </select>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="title">Priority</label>
                    <select id="priority"
                    className="w-full rounded-md"
                    {...register("priority",{required: true})}
                    >
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                        
                    </select>
                </div>
                <div className="flex gap-3 justify-end mt-5">
                    <button onClick={()=> onCancel()} type="button" className="btn btn-danger">Cancel</button>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </Modal>
    );
};

export default AddTaskModal;