import React, { useEffect, useState, useRef } from "react";
import TextItem from "./components/TextItem";
import Input from "./components/Input";
import Modal from "./components/Modal";
import "./App.css";

function App() {
	const [list, setList] = useState([]);
	const [modalText, setModalText] = useState("");
	const [open, setOpen] = useState(false);
	const modalRef = useRef();

	const addToList = (newText) => {
		const newList = [...list, newText];
		setList(newList);
	};

	const setModal = (text) => {
		setModalText(text);
		setOpen(!open);
	};

	const renderList = list.map((item, i) => (
		<TextItem key={i} item={item} setModal={setModal} />
	));

	useEffect(() => {
		const clickedOutside = (e) => {
			if (open && modalRef.current && !modalRef.current.contains(e.target)) {
				setOpen(false);
			}
		};

		document.addEventListener("mousedown", clickedOutside);

		return () => {
			document.removeEventListener("mousedown", clickedOutside);
		};
	}, [open]);

	return (
		<div className='App'>
			<Input addToList={addToList} />
			<ul>{renderList}</ul>
			{open && (
				<div className='modal' ref={modalRef}>
					<Modal modalText={modalText} setOpen={setOpen} />
				</div>
			)}
		</div>
	);
}

export default App;
