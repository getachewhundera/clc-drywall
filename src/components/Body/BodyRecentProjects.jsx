import './Body.css'

    $(document).ready(function(){
        $('.your-class').slick({
          setting-name: setting-value
        });
      });


function BodyRecentProjects() {




    return (
        <>
            {/*This will be the Recent projects section where it will diplay a full project from start to finish and then link to actual recent projects page. 
      When View All button is clicked it will direct it to a Recent projects page.  */}
            <section>
                <h1> Recent Projects </h1>
                <div class="your-class">
  <div>your content</div>
  <div>your content</div>
  <div>your content</div>
</div>

                <div>
                    few images will go here of one full project.
                </div>
                <br></br>

                <button type="button" id="mainPageViewAllButton"> View All</button>

            </section>


        </>
    );
};

export default BodyRecentProjects; 