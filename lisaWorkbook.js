//n is number of chapters
//k is max problems on page (the only page that can have less than max is the last page of the chapter... problem 1 of chapter is always new page)
//arr is an array of number of problems per chapter in order... index 0 is chapter 1

//return how many times a page index (ie the number problem... not zero indexed here) matches the page number

//so if args are 3, 2, [1,2,3] that means there's three chapters (1-3) with a max of 2 problems per page... chap 1 has 1 problem, chap 2 has 2 problems,
//chap 3 has 3 problems... 
//chapter 1 has 1 problem... problem 1 is on page one thus it is a special problem and the counter goes up one 

//chaper 2 has 2 problems that go on 1 page (page 2 in the book since chap 1 is already finished and chapters start on a new page).. since problem 2
//of chapter 2 is on page 2 it is a special number (ei problem 2 is on page 2 of the book.. doesn't matter what chapter it is)

//chapter 3 has three problems. chapter 3 starts on page 3. problems 1 and 2 go on page 3 and then problem 3 is pushed to page 4. Thus no special
//problems occur in this chapter since the problem number never matches the page

//the final value returned is 2 since problem 1 on page 1 was special and problem 2 (of chap 2.. again chap doesn't matter) was on page 2. 

function workbook(n, k, arr) {
  //increment return value
  let totalSpecial = 0;
  //increment currentPage
  let currentPage = 0;
  //iterate through chapters
  for (i = 0; i < n; i++) {
    //how many pages are in the chapter
    let pages = Math.ceil(arr[i] / k);
    //page number spans 
    let pageQuestionOne = 0;
    let pageLastQuestion = 0;
    //iterate through pages of current chapter
    for (let j = 0; j < pages; j++) {
      //increment page of book, not chapter
      currentPage++
      // console.log(`currentPage ${currentPage}`)
      if (j > 0) {
        pageQuestionOne = pageQuestionOne + k
      } else {
        pageQuestionOne++
      }
      if (j === (pages - 1)) {
        pageLastQuestion = arr[i];
      } else {
        pageLastQuestion = k * (j + 1)
      }
      // console.log(`pageQuestionOne ${pageQuestionOne}, pageLastQuestion ${pageLastQuestion}`)
      if (currentPage >= pageQuestionOne && currentPage <= pageLastQuestion) {
        totalSpecial++
        // console.log(totalSpecial)
      }
    }
  }
  return totalSpecial;
}

// console.log(workbook(5, 3, [6, 4, 5, 3, 1]))
console.log(workbook(5, 3, [4, 2, 6, 1, 10]))

//5 chapters, 3 problems per page 
//first chapter has 6 problems.. can loop through just arr.length or iteration to i=n
//pages (variable?) could be arr[i]/k 
//math to determine a count iteration.. 

//is it possible to do a value judgement and increment final counter properly with just the 
//final problem number of the chapter? That way if a problem is less than that and on the 
//proper page number it would qualify as special? 
//wouldn't need to worry about the first problem number on the page because it would naturally 
//be more than the last page's final problem? idk 

//qualifying for increment will test against pageCounter which gives current page
//if you're on page 1 and you have problems 1 (or any number) than you can increment special count
//you can never have more than one increment per page 

//if pageCount falls between the upper and lower limit of the problem set then it would qualify

//j loop goes through a page number in a chapter and uses pageCount to see what page you're on
//if it's page 1 then obviously would be i+1 but not for the next problem

//arr[i] is total problems in chapter 
//pages is total pages in chapter
//j+1 is current page in chapter
//pageCounter is current page in book 

//6 problems in chapter... already have testing set up so obviously chap 1 (unless last)
//can make an iterator that's keep track of the increment and then 1 of that chapter
//first equals k and then the first for next iteration equals that + 1


//should you just make j equal to k and increment by k until > k*pages 

//or could just make j=1 and then increment by k 

//so 1st span would be j to k
//next span would be j to k * j

//could store actual chapter as an increment like chap ++ make chap = 0; 