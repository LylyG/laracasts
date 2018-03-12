//Slots for swapping out content. I can leave default content here as I did with the footer.
//If I were to create a template tag for the footer slot in index.html it would override
//my defaults in here. 



Vue.component('modal', {

	template: `
		<div class="modal is-active">
	  
		  	<div class="modal-background"></div>
		  
		  	<div class="modal-card">

		    	<header class="modal-card-head">
		      		<p class="modal-card-title">

		      			<slot name="header">

		      			</slot>

		      		</p>


		      		<button class="delete" aria-label="close"></button>
		    	</header>

			    <section class="modal-card-body">
			      <slot>
			      </slot>
			    </section>


			    <footer class="modal-card-foot">
			    	<slot name="footer">
			    		<button class="button is-success">Ok</button>
			    	</slot>
			    </footer>

		  	</div>

		</div>

`,

});



new Vue({

	el: '#root',


});


