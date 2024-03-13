import { useEffect, useState } from 'react';

export function usePagination(length: number) {
	const [pageStart, setPageStart] = useState(0);
	const [pageEnd, setPageEnd] = useState(10);
	const inc = 10;
	const [disabled, setDisabled] = useState({ start: false, end: false });
	useEffect(() => {
		if (pageStart <= 0) {
			setDisabled((prev) => {
				return { ...prev, start: true, end: false };
			});
      return
		}
		if (pageEnd >= length) {
			setDisabled((prev) => {
				return { ...prev, start: false, end: true };
			});
      return
		}
    setDisabled(prev=> {
      return {...prev, start:false, end:false}
    })
	}, [pageStart, pageEnd, length]);

	function nextPage() {
		setPageStart((prev) => prev + inc);
		setPageEnd((prev) => prev + inc);
	}

	function prevPage() {
		setPageStart(pageStart - inc);
		setPageEnd(pageEnd - inc);
	}

	return {
		pageStart,
		pageEnd,
		nextPage,
		prevPage,
		disabled,
	};
}
