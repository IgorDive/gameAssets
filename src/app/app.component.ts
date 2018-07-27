import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
    selector: 'game-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    toggleLandingPage: boolean = true;
    toggleFieldGame: boolean = false;
    toggleMathTask: boolean = false;
    toggleChoiceOfSpell: boolean = false;
    toggleTopTenResults: boolean = false;
    mainTreatment: string = 'paused';
    mainExplosion: string = 'paused';        
    mainLighting: string = 'paused';
    mainFireball: string = 'paused';
    fireballOnEnemyHit: string = 'paused';
    fireballOnEnemyMiss: string = 'paused';
    explosionOnEnemy: string = 'paused';
    taskPerformingTime: number = 0;
    timerTaskPerformingStart: number = 0;
    counterTab: number = 0;
    player: string;
    fullNameEnemy:string;
    progressAvatar: number;
    progressEnemy: number;
    nameEnemy: string[] = ['Tommy', 'Harry', 'Billy', 'Bobby', 'Willy', 'Benny'];
    propertyEnemy: string[] = ['angry', 'dirty', 'black', 'nagging', 'stupid', 'screamy'];
    typeOfEnemy: string[][] = [['ork','ork-head'], ['ghost', 'ghost-head'], ['skeleton', 'skeleton-head'], ['pirate', 'pirate-head'], ['devil', 'devil-head'], ['robot', 'robot-head']];
    bodyesOfEnemy: string[] = ['ork-body', 'skeleton-body', 'robot-body'];
    handsOfEnemy: string[][] = [['ork-left-hand', 'ork-right-hand'], ['skeleton-left-hand', 'skeleton-right-hand'], ['robot-left-hand', 'robot-right-hand']];
    feetOfEnemy: string[][] = [['ork-left-foot', 'ork-right-foot'], ['skeleton-left-foot', 'skeleton-right-foot'], ['robot-left-foot', 'robot-right-foot']];
    number1: number;
    number2: number;
    sign: string;
    computedResult: number;
    result: string;
    statusOperation: number;
    counterEnemies: number = 0;
    topTenResults: any;
    headAvatar: {} = {
        'avatar-head': true,
        'avatar-animation-wait-head': true,
        'avatar-animation-lost-head': false,
        'animation-shake-head-from-explosion': false
    };
    bodyAvatar: {} = {
        'avatar-body': true,
        'avatar-animation-wait-body': true,
        'avatar-animation-shake-body': false
    };
    rightHandAvatar: {} = {
        'avatar-right-hand': true,
        'avatar-animation-wait-right-hand': true,
        'avatar-animation-kick-right-hand': false,
        'avatar-animation-lost-right-hand': false
    };
    leftHandAvatar: {} = {
        'avatar-left-hand': true,
        'avatar-animation-wait-left-hand': true
    };
    headEnemy: {} = {
        'enemy-head': true,
        'enemy-animation-wait-head': true,
        'devil-head': false,
        'ghost-head': false,
        'pirat-head': false,
        'robot-head': false,
        'skeleton-head': false,
        'ork-head': false,
        'animation-shake-head-from-explosion': false,
        'enemy-animation-shake-head': false,
        'enemy-animation-lost-head': false
    };
    bodyEnemy: {} = {
        'enemy-body': true,
        'enemy-animation-wait-body': true,
        'robot-body': false,
        'skeleton-body': false,
        'ork-body': false,
        'enemy-animation-shake-body': false
    };
    leftHandEnemy: {} = {
        'enemy-left-hand': true,
        'enemy-animation-wait-left-hand': true,
        'robot-left-hand': false,
        'skeleton-left-hand': false,
        'ork-left-hand': false
    };
    rightHandEnemy: {} = {
        'enemy-right-hand': true,
        'enemy-animation-wait-right-hand': true,
        'robot-right-hand': false,
        'skeleton-right-hand': false,
        'ork-right-hand': false,
        'enemy-animation-kick-right-hand': false
    };
    leftFootEnemy: {} = {
        'enemy-left-foot': true,
        'robot-left-foot': false,
        'skeleton-left-foot': false,
        'ork-left-foot': false
    };
    rightFootEnemy: {} = {
        'enemy-right-foot': true,
        'robot-right-foot': false,
        'skeleton-right-foot': false,
        'ork-right-foot': false
    };
    tempArrayClassesOfEnemy: string[] = [];

    @ViewChild("lighting") light: ElementRef;
    @ViewChild("fireball") ball: ElementRef;
    @ViewChild("treatment") treat: ElementRef;
    @ViewChild("startSound") strtSound: ElementRef;
    @ViewChild("audioFocus") audioF: ElementRef;
    @ViewChild("audioSuccess") audioSuccs: ElementRef;
    @ViewChild("audioUnsuccess") audioUnsuccs: ElementRef;
    @ViewChild("audioExplosion") audioExpl: ElementRef;
    @ViewChild("audioLighting") audioLight: ElementRef;
    @ViewChild("audioTreatment") audioTreat: ElementRef;
    @ViewChild("audioWin") audioW: ElementRef;
    @ViewChild("audioLose") audioL: ElementRef;
    @ViewChild("audioFireball") audioFireb: ElementRef;
    @ViewChild("audioFireballOnEnemyHit") audioFireballOnEnemyH: ElementRef;
    @ViewChild("audioFireballOnEnemyMiss") audioFireballOnEnemyM: ElementRef;
    @ViewChild("audioExplosionOnEnemy") audioExplosionOnEn: ElementRef;

    ngOnInit(): void {
        setTimeout( () => this.strtSound.nativeElement.play(), 1000);
    }

    start(code: number):void {

        if (code === 13 || code === 1) {
            if (!this.player) return;
            let indexHeadEnemy: number = Math.floor(Math.random() * this.typeOfEnemy.length); 
            let indexBodyEnemy: number = Math.floor(Math.random() * this.bodyesOfEnemy.length); 
            let indexHandsEnemy: number = Math.floor(Math.random() * this.handsOfEnemy.length);
            let indexFeetEnemy: number = Math.floor(Math.random() * this.feetOfEnemy.length);

            if (this.tempArrayClassesOfEnemy.length) {
                this.headEnemy[this.tempArrayClassesOfEnemy[0]] = false;
                this.bodyEnemy[this.tempArrayClassesOfEnemy[1]] = false;
                this.leftHandEnemy[this.tempArrayClassesOfEnemy[2]] = false;
                this.rightHandEnemy[this.tempArrayClassesOfEnemy[3]] = false;
                this.leftFootEnemy[this.tempArrayClassesOfEnemy[4]] = false;
                this.rightFootEnemy[this.tempArrayClassesOfEnemy[5]] = false;
                this.tempArrayClassesOfEnemy = [];
            }

            this.fullNameEnemy = `${this.propertyEnemy[Math.floor(Math.random()*this.propertyEnemy.length)]} ${this.typeOfEnemy[indexHeadEnemy][0]} ${this.nameEnemy[Math.floor(Math.random()*this.nameEnemy.length)]}`;
            this.headEnemy[this.typeOfEnemy[indexHeadEnemy][1]] = true;
            this.tempArrayClassesOfEnemy.push(this.typeOfEnemy[indexHeadEnemy][1]);
            this.bodyEnemy[this.bodyesOfEnemy[indexBodyEnemy]] = true;
            this.tempArrayClassesOfEnemy.push(this.bodyesOfEnemy[indexBodyEnemy]);
            this.leftHandEnemy[this.handsOfEnemy[indexHandsEnemy][0]] = true;
            this.tempArrayClassesOfEnemy.push(this.handsOfEnemy[indexHandsEnemy][0]);
            this.rightHandEnemy[this.handsOfEnemy[indexHandsEnemy][1]] = true;
            this.tempArrayClassesOfEnemy.push(this.handsOfEnemy[indexHandsEnemy][1]);
            this.leftFootEnemy[this.feetOfEnemy[indexFeetEnemy][0]] = true;
            this.tempArrayClassesOfEnemy.push(this.feetOfEnemy[indexFeetEnemy][0]);
            this.rightFootEnemy[this.feetOfEnemy[indexFeetEnemy][1]] = true;
            this.tempArrayClassesOfEnemy.push(this.feetOfEnemy[indexFeetEnemy][1]);
            this.progressAvatar = 100;
            this.progressEnemy = 100;
            this.toggleLandingPage = false;
            this.toggleFieldGame = true;
            if (!window.localStorage.tTResults) {
                window.localStorage.tTResults = "[]";
            }
            this.topTenResults = JSON.parse(window.localStorage.tTResults);
            setTimeout( () => this.toggleChoiceOfSpell = true, 2000);
        }
    }



    doLightingStrike(): void {
        this.counterTab = 0;
        this.toggleChoiceOfSpell = false;
        this.toggleFieldGame = false;
        this.generateExample();
        this.toggleMathTask = true;
        this.statusOperation = 1;
        this.timerTaskPerformingStart = Date.now();
    }

    doFireball(): void {
        this.counterTab = 0;
        this.toggleChoiceOfSpell = false;
        this.toggleFieldGame = false;
        this.generateExample();
        this.toggleMathTask = true;
        this.statusOperation = 2;
        this.timerTaskPerformingStart = Date.now();
    }

    doTreatment(): void {
        this.counterTab = 0;
        this.toggleChoiceOfSpell = false;
        this.toggleFieldGame = false;
        this.generateExample();
        this.toggleMathTask = true;
        this.statusOperation = 3;
        this.timerTaskPerformingStart = Date.now();
    }

    doToggleFocus(code: number, e: KeyboardEvent): void {
        if (code === 9 || code === 39) {
            e.preventDefault();
            e.stopPropagation();
            this.counterTab++;
            this.audioF.nativeElement.currentTime = 0;
            this.audioF.nativeElement.play();
            
            if (this.counterTab === 1) this.ball.nativeElement.focus();
            if (this.counterTab === 2) this.treat.nativeElement.focus();
            if (this.counterTab === 3) {
                this.counterTab = 0;
                this.light.nativeElement.focus();
            }
        }
        if (code === 37) {
            e.preventDefault();
            e.stopPropagation();
            this.counterTab--;
            this.audioF.nativeElement.currentTime = 0;
            this.audioF.nativeElement.play();
            
            if (this.counterTab === -1) {
                this.counterTab = 2;
                this.treat.nativeElement.focus();
            }
            if (this.counterTab === 1) this.ball.nativeElement.focus();
            if (this.counterTab === 0) {
                this.light.nativeElement.focus();
            }
        }
    }

    generateExample(): void {
        this.number1 = Math.ceil(Math.random()*100);
        this.number2 = Math.ceil(Math.random()*100);
        this.sign = (0.5 < Math.random())? '+': '-';
        this.computedResult = (this.sign === '+')? this.number1 + this.number2: this.number1 - this.number2;
    }

    checkResult(code: number): void {
        if (code === 13 || code === 32 || code === 1) {
            let resultNumber: number = Number(this.result);
            if (!resultNumber && resultNumber !== 0) return;
            this.result = '';
            this.taskPerformingTime = Date.now() - this.timerTaskPerformingStart;
            setTimeout( () => {
                this.toggleMathTask = false;
                this.toggleFieldGame = true;
            }, 1300);
            if (resultNumber === this.computedResult) {
                this.audioSuccs.nativeElement.play();
                if (this.statusOperation === 1) {
                    setTimeout( () => this.startLighting(), 5000 );
                } else if (this.statusOperation === 2) {
                    setTimeout( () => this.startFireball(), 5000 );
                } else {
                    setTimeout( () => this.startTreatment(), 5000 );
                }
            } else {
                this.audioUnsuccs.nativeElement.play();
                setTimeout( () => this.doExplosion(), 5000 );
            }
        }
    }

    calculateDamageOrTreatmentForAvatar(): number {
        let result: number = 14/(this.taskPerformingTime/1000 + 4 + this.counterEnemies);
        return result;
    }

    startLighting(): void {
        this.mainLighting = 'running';
        this.audioLight.nativeElement.play();
        this.headEnemy['enemy-animation-wait-head'] = false;
        this.bodyEnemy['enemy-animation-wait-body'] = false;
        this.leftHandEnemy['enemy-animation-wait-left-hand'] = false;
        this.rightHandEnemy['enemy-animation-wait-right-hand'] = false;
        this.headEnemy['enemy-animation-shake-head'] = true;
        this.bodyEnemy['enemy-animation-shake-body'] = true;
        setTimeout( () => {
            this.progressEnemy = this.progressEnemy - Math.floor( 20*this.calculateDamageOrTreatmentForAvatar() );
            if (this.progressEnemy <= 0) {
                this.headEnemy['enemy-animation-lost-head'] = true;
                this.audioW.nativeElement.play();
                this.counterEnemies = this.counterEnemies + 1;
                setTimeout( () => {
                    this.headEnemy['enemy-animation-lost-head'] = false;
                    this.headEnemy['enemy-animation-shake-head'] = false;
                    this.bodyEnemy['enemy-animation-shake-body'] = false;
                    this.headEnemy['enemy-animation-wait-head'] = true;
                    this.bodyEnemy['enemy-animation-wait-body'] = true;
                    this.leftHandEnemy['enemy-animation-wait-left-hand'] = true;
                    this.rightHandEnemy['enemy-animation-wait-right-hand'] = true;
                    this.start(1);
                }, 4000 );
            } else {
                this.headEnemy['enemy-animation-shake-head'] = false;
                this.bodyEnemy['enemy-animation-shake-body'] = false;
                this.headEnemy['enemy-animation-wait-head'] = true;
                this.bodyEnemy['enemy-animation-wait-body'] = true;
                this.leftHandEnemy['enemy-animation-wait-left-hand'] = true;
                this.rightHandEnemy['enemy-animation-wait-right-hand'] = true;
                setTimeout( () => this.doExplosion(), 1000 );
            }
        }, 2000);
        setTimeout( () => {
            this.mainLighting = 'paused';
        }, 3000);
    }

    startFireball(): void {
        this.mainFireball = 'running';
        this.audioFireb.nativeElement.play();
        setTimeout( () => {
            this.mainFireball = 'paused';
            if (Math.random() > 0.7) {
                this.fireballOnEnemyHit = 'running';
                this.audioFireballOnEnemyH.nativeElement.play();
                setTimeout( () => {
                    this.fireballOnEnemyHit = 'paused';
                    this.headEnemy['enemy-animation-wait-head'] = false;
                    this.bodyEnemy['enemy-animation-wait-body'] = false;
                    this.leftHandEnemy['enemy-animation-wait-left-hand'] = false;
                    this.rightHandEnemy['enemy-animation-wait-right-hand'] = false;
                    this.explosionOnEnemy = 'running';
                    this.audioExplosionOnEn.nativeElement.play();
                    this.headEnemy['animation-shake-head-from-explosion'] = true;
                    setTimeout( () => {
                        this.explosionOnEnemy = 'paused';
                        this.headEnemy['animation-shake-head-from-explosion'] = false;
                        this.progressEnemy = this.progressEnemy - 3*Math.floor( 20*this.calculateDamageOrTreatmentForAvatar() );
                        if (this.progressEnemy <= 0) {
                            this.headEnemy['enemy-animation-lost-head'] = true;
                            this.audioW.nativeElement.play();
                            this.counterEnemies = this.counterEnemies + 1;
                            setTimeout( () => {
                                this.headEnemy['enemy-animation-lost-head'] = false;
                                this.headEnemy['enemy-animation-wait-head'] = true;
                                this.bodyEnemy['enemy-animation-wait-body'] = true;
                                this.leftHandEnemy['enemy-animation-wait-left-hand'] = true;
                                this.rightHandEnemy['enemy-animation-wait-right-hand'] = true;
                                this.start(1)
                            }, 4000 );
                        } else {
                            this.headEnemy['enemy-animation-wait-head'] = true;
                            this.bodyEnemy['enemy-animation-wait-body'] = true;
                            this.leftHandEnemy['enemy-animation-wait-left-hand'] = true;
                            this.rightHandEnemy['enemy-animation-wait-right-hand'] = true;
                            setTimeout( () => this.doExplosion(), 1000 );
                        }
                    }, 3000);
                }, 900);
            } else {
                this.fireballOnEnemyMiss = 'running';
                this.audioFireballOnEnemyM.nativeElement.play();
                setTimeout( () => {
                    this.fireballOnEnemyMiss = 'paused';
                    setTimeout( () => this.doExplosion(), 1000);
                }, 2000);
            }
        }, 3600);
    }

    startTreatment(): void {
        this.mainTreatment = 'running';
        this.audioTreat.nativeElement.play();
        setTimeout( () => {
            this.progressAvatar = this.progressAvatar + Math.floor( 20*this.calculateDamageOrTreatmentForAvatar() );
            setTimeout( () => this.doExplosion(), 1500 );
        }, 2000);
        setTimeout( () => {
            this.mainTreatment = 'paused';
        }, 3000);
    }

    doExplosion(): void {
        this.mainExplosion = 'running';
        this.audioExpl.nativeElement.play();
        this.headAvatar['avatar-animation-wait-head'] = false;
        this.bodyAvatar['avatar-animation-wait-body'] = false;
        this.rightHandAvatar['avatar-animation-wait-right-hand'] = false;
        this.leftHandAvatar['avatar-animation-wait-left-hand'] = false;
        this.headAvatar['animation-shake-head-from-explosion'] = true;
        setTimeout( () => {
            this.progressAvatar = this.progressAvatar - 20*((Math.random() > 0.8)? 1.3: 1);
            if (this.progressAvatar <= 0) {
                this.headAvatar['avatar-animation-lost-head'] = true;
                this.rightHandAvatar['avatar-animation-lost-right-hand'] = true;
                this.audioL.nativeElement.play();
                this.topTenResults.push([this.player, this.counterEnemies]);
                this.topTenResults.sort( (a:[string, number], b:[string, number]) => b[1] - a[1] );
                if (this.topTenResults.length > 10) this.topTenResults.pop();
                window.localStorage.tTResults = JSON.stringify(this.topTenResults);
                setTimeout( () => {
                    this.headAvatar['avatar-animation-lost-head'] = false;
                    this.rightHandAvatar['avatar-animation-lost-right-hand'] = false;
                    this.headAvatar['avatar-animation-wait-head'] = true;
                    this.bodyAvatar['avatar-animation-wait-body'] = true;
                    this.rightHandAvatar['avatar-animation-wait-right-hand'] = true;
                    this.leftHandAvatar['avatar-animation-wait-left-hand'] = true;
                    this.toggleFieldGame = false;
                    this.toggleTopTenResults = true;
                }, 3000);
            } else {
                setTimeout( () => {
                    this.headAvatar['avatar-animation-wait-head'] = true;
                    this.bodyAvatar['avatar-animation-wait-body'] = true;
                    this.rightHandAvatar['avatar-animation-wait-right-hand'] = true;
                    this.leftHandAvatar['avatar-animation-wait-left-hand'] = true;
                    this.toggleChoiceOfSpell = true; 
                }, 1000 );
            }
        }, 3000);
        setTimeout( () => {
            this.headAvatar['animation-shake-head-from-explosion'] = false;
            this.mainExplosion = 'paused';
        }, 2500);
    }
}
