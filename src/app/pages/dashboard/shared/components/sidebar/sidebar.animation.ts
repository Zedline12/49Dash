import { TimelineLite, Power1 } from 'gsap';
export class SideBarAnimation {
  static toggle() {
    if ($('.sidebar').width()! > 130) {
      this.in();
    } else {
      this.out();
    }
  }
  private static in() {
    const tl: TimelineLite = new TimelineLite();
    tl.to('.sidebar', 0.2, {
      width: '100%',
      ease: 'sine.out',
    });
    tl.to(".dash-logo", 0.2, {
      opacity: 0,
      display:'none'
    },'<')
    tl.to(
      '.item-title',
      0.2,
      {
        display: 'none',
        opacity: 0,
      },
      '<',
    );
    tl.to(
      '.item-icon',
      0.2,
      {
        fontSize: '1.5rem',
        color: '#c065f7',
      },
      '<',
    );
    tl.to(
      '.category-item',
      0.2,
      {
        display: 'flex',
        justifyContent: 'center',
      },
      '<',
    );
    tl.to(
      '.category-title',
      0.2,
      {
        textAlign: 'center',
        display:'none'
      },
      '<',
    );
    tl.to(
      '.dashboard-title',
      0.2,
      {
        display: 'none',
        opacity: 0,
      },
      '<',
    );
    tl.to('.bi-caret-right', 0.2, { display: 'none' }, '<');
    tl.add(function () {
      $('.dashboard-icon')
        .addClass('col-12')
        .addClass('justify-content-center');
      $('.sidebar-col').addClass("col-1").removeClass("col-2")
      $(".content-col").addClass("col-11").removeClass("col-10")
    });
  }
  private static out() {
    const tl: TimelineLite = new TimelineLite();
    tl.add(function () {
      $('.dashboard-icon')
        .removeClass('col-12')
        .removeClass('justify-content-center');
        $('.sidebar-col').addClass("col-2").removeClass("col-1")
        $(".content-col").addClass("col-10").removeClass("col-11")
    });
    tl.to('.sidebar', 0.2, {
      width: '100%',
      ease: 'sine.out',
    });
    tl.to(".dash-logo", 0.2, {
      opacity: 1,
      display:'block'
    },'<')
    tl.to(
      '.item-title',
      0.2,
      {
        display: 'block',
        opacity: 1,
      },
      '<',
    );
    tl.to(
      '.item-icon',
      0.2,
      {
        fontSize: '0.7rem',
        color: 'white',
      },
      '<',
    );
    tl.to(
      '.category-item',
      0.2,
      {
        display: 'block',
        justifyContent: 'none',
      },
      '<',
    );
    tl.to(
      '.category-title',
      0.2,
      {
        textAlign: 'start',
      },
      '<',
    );
    tl.to('.dashboard-title', 0.3, {
      display: 'block',
      opacity: 1,
    });
    tl.to('.bi-caret-right', 0.2, { display: 'block' }, '<');
  }
  
}
