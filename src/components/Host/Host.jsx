
export default function Host({hostName, hostPicture}) {
 
    return (
		<aside className="host-comp">
			<div className="host-name">{hostName}</div>
			<div className="hostPicture">
				<img src={hostPicture} alt={hostName} />
			</div>
		</aside>
	);
  
}
