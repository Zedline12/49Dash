import { Injectable } from '@angular/core';
import { TimelineLite } from 'gsap';
import $ from 'jquery';
export enum ScreenWidth {
  Large,
  Medium,
  Small,
}
@Injectable({ providedIn: 'root' })
export class SideBarAnimationService {
  constructor() {}
  //undefined in first time opening website
  isClosed!: boolean;
  screenWidth!: ScreenWidth;
  public init(screenWidth: number) {
    if (screenWidth > 1300) {
      this.screenWidth = ScreenWidth.Large;
      
      this.open();
    } else if (screenWidth > 776 && screenWidth < 1300) {
      this.screenWidth = ScreenWidth.Medium;
      this.close();
    } else {
      this.screenWidth = ScreenWidth.Small;
      this.isClosed = true;
    }
  }
  public toggle() {
    //logic--->
    //close--
    //wide screen()=>{close means barley close and keep part of the sidebar and icons}
    //() below 776px()=>{completly close sidebar}
    //open--
    //wide screen()=>{opens sidebar and takes width from the screen}
    //below 776px()=>{opens in sticky mode}

    //wide screen logic
    if (
      !this.isClosed &&
     ( this.screenWidth == ScreenWidth.Large || ScreenWidth.Medium)
    ) {
     
      this.close();
    } else if (
      this.isClosed &&
     ( this.screenWidth == ScreenWidth.Large || ScreenWidth.Medium)
    ) {
      this.open();
    } else if (!this.isClosed && this.screenWidth == ScreenWidth.Small) {
      const tl: TimelineLite = new TimelineLite();
      tl.fromTo(
        '.sidebar',
        0.3,
        { width: '100%' },
        {
          width: '0%',
          ease: 'sine.out',
        },
      );
      tl.add(function () {
        $('.sidebar-container')
          .addClass('sidebar-mobileview-close')
          .removeClass('sidebar-mobileview-open');
      });
      this.isClosed = true;
    } else if (this.isClosed && this.screenWidth == ScreenWidth.Small) {
      const tl: TimelineLite = new TimelineLite();
      $('.sidebar-container')
        .addClass('sidebar-mobileview-open')
        .removeClass('sidebar-mobileview-close');

      tl.fromTo(
        '.sidebar',
        0.2,
        { width: '0%', opacity: 0 },
        {
          width: '100%',
          opacity: 1,
          ease: 'sine.out',
        },
      );
      this.isClosed = false;
    }
  }
  private close() {
    const tl: TimelineLite = new TimelineLite();
    tl.to('.sidebar', 0.2, {
      width: '100%',
      ease: 'sine.out',
    });
    tl.to(
      '.dash-logo',
      0.2,
      {
        opacity: 0,
        display: 'none',
      },
      '<',
    );
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
        display: 'none',
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
    tl.to('.child-items-list', 0.2, { display: 'none' }, '<');
    tl.to('.bi-caret-right', 0.2, { display: 'none' }, '<');
    tl.add(function () {
      $('.dashboard-icon')
        .addClass('col-12')
        .addClass('justify-content-center');
      $('.sidebar-col')
        .addClass('col-1')
        .removeClass('col-md-2')
        .removeClass('col-5');
      $('.content-col')
        .addClass('col-11')
        .removeClass('col-md-10')
        .removeClass('col-12');
    });
    this.isClosed = true;
  }
  private open() {
    const tl: TimelineLite = new TimelineLite();
    //first check if sidebar container was display none
    if($('.sidebar-container').hasClass('sidebar-mobileview-open')){
      $('.sidebar-container')
      .removeClass('sidebar-mobileview-open');
    }
      if($('.sidebar-container').hasClass('sidebar-mobileview-close')){
      $('.sidebar-container')
      .removeClass('sidebar-mobileview-close');
    }
    tl.add(function () {
      $('.dashboard-icon')
        .removeClass('col-12')
        .removeClass('justify-content-center');
      $('.sidebar-col')
        .addClass('col-md-2')
        .addClass('col-5')
        .removeClass('col-1');
      $('.content-col')
        .addClass('col-md-10')
        .addClass('col-12')
        .removeClass('col-11');
    });
    tl.to('.sidebar', 0.2, {
      width: '100%',
      ease: 'sine.out',
    });
    tl.to(
      '.dash-logo',
      0.2,
      {
        opacity: 1,
        display: 'block',
      },
      '<',
    );
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
        display: 'block',
      },
      '<',
    );
    tl.to('.dashboard-title', 0.3, {
      display: 'block',
      opacity: 1,
    });
    tl.to('.bi-caret-right', 0.2, { display: 'block' }, '<');
    tl.to('.child-items-list', 0.2, { display: 'block' }, '<');
    this.isClosed = false;
  }

  public toggleItemCollapse(itemId: string) {
    //if (closed)
    if ($(`#${itemId} .bi-caret-right`).length) {
      const tl: TimelineLite = new TimelineLite();
      tl.add(function () {
        $(`#${itemId} .bi-caret-right`)
          .addClass('bi-caret-down')
          .removeClass('bi-caret-right');
      });

      tl.to(
        `#${itemId} .child-item`,
        0.3,

        { position: 'static', height: '30px', marginTop: 0, opacity: 0.7 },
        '<',
      );
      tl.to(
        `#${itemId} .category-item-line`,
        0.5,
        { height: '100%', opacity: 1, ease: 'ease.in' },
        '<',
      );
    }
    //its open close it...
    else {
      const tl: TimelineLite = new TimelineLite();
      tl.add(function () {
        $(`#${itemId} .bi-caret-down`)
          .addClass('bi-caret-right')
          .removeClass('bi-caret-down');
      });
      tl.to(
        `#${itemId} .category-item-line`,
        0.5,
        {
          height: '0%',
          opacity: 0,
          ease: 'ease.in',
        },
        '<',
      );
      tl.to(
        `#${itemId} .child-item`,
        0.3,
        { height: '0px', opacity: 0, marginTop: '-13%' },
        '<',
      );
      tl.to(`#${itemId} .child-item`, 0.3, { position: 'absolute' });
      tl.to(
        `#${itemId} .category-item-line`,
        0.5,
        {
          opacity: 0,
          height: '0%',
          ease: 'ease.out',
        },
        '<',
      );
    }
  }
}
