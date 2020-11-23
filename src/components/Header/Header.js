import React from 'react';

function Header() {
	
	return (
		<header className="header">
			<div className="container header__container">
				<a 
					href="https://github.com/ithater" 
					className="link header__link"
					target="_blank"
					rel="noreferrer"
				>
					Профиль GitHub
				</a>
			</div>
		</header>	
  );
}

export default Header;
